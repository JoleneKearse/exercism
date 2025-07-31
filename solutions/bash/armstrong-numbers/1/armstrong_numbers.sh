#!/usr/bin/env bash

main() {
  num=$1
  num_of_digits=${#num}
  sum=0

  for ((i=0; i < num_of_digits; i++)); do
    digit=${num:i:1}
    sum=$(($sum + $digit ** $num_of_digits))
  done

  if [[ $sum -eq $num ]]; then
    echo "true"
  else
    echo "false"
  fi
}

main "$@"
