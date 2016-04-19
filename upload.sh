#!/bin/bash

while true; do
  for NUM in {0..8}; do
    echo 'http://127.0.0.1:5000/upload'
  done | xargs -n1 -P8 -I {} \
    curl -s --max-time 3 -F "uploadMe=@./fixtures/test.txt" {} >/dev/null
  RC=$?
  [ $RC -eq 0 ] || nc -z 127.0.0.1 5000 || exit $RC
done;
