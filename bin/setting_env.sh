#!/bin/bash

set -e

cd $(dirname "$0")

sudo apt install nodejs npm

cp ../.npmrc $HOME

GLOBAL_BIN_PATH=$(cat ../.npmrc |grep prefex |sed 's/prefex=//')

echo "$GLOBAL_BIN_PATH"

mkdir -p "$GLOBAL_BIN_PATH"

export PATH=$PATH:"$GLOBAL_BIN_PATH"
