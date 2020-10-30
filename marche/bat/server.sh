#!/bin/bash

cd $(dirname "$0")

pwd

cd ../src

python3 -m http.server 8000
