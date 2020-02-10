#!/usr/bin/env bash
npm run build
aws s3 sync --acl public-read --delete build s3://$BUCKET
