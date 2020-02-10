#!/usr/bin/env bash

aws s3 sync --acl public-read --delete build s3://$BUCKET
