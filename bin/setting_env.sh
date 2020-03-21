#!/bin/bash

set -e

cd $(dirname "$0")

#sudo apt install nodejs npm

cp ../.npmrc $HOME

GLOBAL_BIN_PATH=$(cat ../.npmrc |grep prefix |sed 's/prefix=//')

echo "$GLOBAL_BIN_PATH"

mkdir -p "$GLOBAL_BIN_PATH"

#閉じれば効果なしだけど
export PATH=$PATH:"$GLOBAL_BIN_PATH/bin"
