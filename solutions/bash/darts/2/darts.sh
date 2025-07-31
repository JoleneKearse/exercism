#!/usr/bin/env bash

main() {
  if [ "$#" -ne 2 ]; then
    echo "Invalid number of arguments."
    exit 1
  fi

  x=$1
  y=$2

  if ! [[ $x =~ ^-?[0-9]+([.][0-9]+)?$ ]] || ! [[ $y =~ ^-?[0-9]+([.][0-9]+)?$ ]]; then
    echo "Invalid input. Please enter numbers for x and y."
    exit 1
  fi

  distance_squared=$(awk -v x=$x -v y=$y 'BEGIN {print x*x + y*y}')
  
  # Determine the points based on the squared distance
  if awk -v ds=$distance_squared 'BEGIN {exit ds > 100 ? 0 : 1}'; then
    echo 0
  elif awk -v ds=$distance_squared 'BEGIN {exit ds > 25 ? 0 : 1}'; then
    echo 1
  elif awk -v ds=$distance_squared 'BEGIN {exit ds > 1 ? 0 : 1}'; then
    echo 5
  else
    echo 10
  fi
}

main "$@"
