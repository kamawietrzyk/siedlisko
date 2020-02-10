#!/usr/bin/env bash
sudo npm i -g react-scripts
npm install
npm run build
aws s3 sync --acl public-read --delete build s3://$BUCKET
