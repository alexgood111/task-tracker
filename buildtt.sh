#!/bin/bash

# If a command fails then the deploy stops
set -e

npm i react-scripts react
npm install
npm audit fix --force
npm run build

