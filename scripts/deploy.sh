#!/usr/bin/env bash
#
# Deploy the built site to S3 + CloudFront.
#
# Lives in scripts/, but always runs from the repo root so that
# `npm run build`, `dist/`, and `deploy.config` resolve correctly.
#
# Config: copy deploy.config.example -> deploy.config (at repo root) and fill
# in your values, OR export BUCKET / DISTRIBUTION_ID / AWS_PROFILE / AWS_REGION
# in your shell.
#
# Usage:
#   ./scripts/deploy.sh            # build + sync + invalidate
#   ./scripts/deploy.sh --no-build # skip the build, deploy existing dist/
#   npm run deploy                 # same as above via package.json
#
set -euo pipefail

cd "$(dirname "$0")/.."

# ---- load config ----
if [[ -f deploy.config ]]; then
  # shellcheck disable=SC1091
  source deploy.config
fi

BUCKET="${BUCKET:-}"
DISTRIBUTION_ID="${DISTRIBUTION_ID:-}"
AWS_PROFILE="${AWS_PROFILE:-default}"
AWS_REGION="${AWS_REGION:-us-east-1}"

# ---- guards ----
if ! command -v aws >/dev/null 2>&1; then
  echo "✖ aws CLI not found. Install it: https://aws.amazon.com/cli/" >&2
  exit 1
fi
if [[ -z "$BUCKET" || -z "$DISTRIBUTION_ID" ]]; then
  echo "✖ BUCKET and DISTRIBUTION_ID are required (set them in deploy.config or env)." >&2
  exit 1
fi

export AWS_PROFILE AWS_REGION
AWS="aws --profile $AWS_PROFILE --region $AWS_REGION"

# verify credentials early
if ! $AWS sts get-caller-identity >/dev/null 2>&1; then
  echo "✖ AWS credentials invalid for profile '$AWS_PROFILE'." >&2
  exit 1
fi

# ---- build ----
if [[ "${1:-}" != "--no-build" ]]; then
  echo "▶ Building…"
  npm run build
fi

if [[ ! -d dist ]]; then
  echo "✖ dist/ not found. Run a build first." >&2
  exit 1
fi

# ---- sync ----
# Pass 1: hashed assets — cache hard (immutable). --delete is scoped to non-HTML.
echo "▶ Uploading assets (immutable cache)…"
$AWS s3 sync dist/ "s3://$BUCKET" --delete \
  --exclude "*.html" \
  --cache-control "public,max-age=31536000,immutable"

# Pass 2: HTML — never cache (always revalidate so new deploys show instantly).
echo "▶ Uploading HTML (no-cache)…"
$AWS s3 sync dist/ "s3://$BUCKET" --delete \
  --exclude "*" --include "*.html" \
  --cache-control "public,max-age=0,must-revalidate" \
  --content-type "text/html; charset=utf-8"

# ---- invalidate CloudFront ----
echo "▶ Invalidating CloudFront…"
INVALIDATION_ID=$(
  $AWS cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "/*" \
    --query 'Invalidation.Id' --output text
)
echo "✔ Done. Invalidation: $INVALIDATION_ID"
echo "  (CloudFront may take 1–3 min to fully propagate.)"
