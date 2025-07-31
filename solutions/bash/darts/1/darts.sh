#!/usr/bin/env bash

main() {
  posx=$1
  posy=$2
  score=0

  distance=$(echo "sqrt($posx^2 + $posy^2)" | bc -1)

  if (( $(echo "$distance > 10" | bc -1) )); then
    score=0
  elif (( $(echo "$distance <= 10" | bc -1) )); then
    score=1
  elif (( $(echo "$distance <= 5" | bc -1) ));then
    score=5
  elif (( $(echo "$distance <= 1" | bc -1) )); then
    score=10
  fi

  echo $score
}

main "$@"
