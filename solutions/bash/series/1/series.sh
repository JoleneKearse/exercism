#!/usr/bin/env bash

main() {
  digits=$1
  length_of_digits=${#digits}
  length=$2

  if [[ -z "$digits" ]]; then
    echo "series cannot be empty"
    exit 1
  fi

  if [[ "$length" -lt 0 ]]; then
    echo "slice length cannot be negative"
    exit 1
  fi

  if [[ "$length" -le 0 ]]; then
    echo "slice length cannot be zero"
    exit 1
  fi

  if [[ "$length" -gt "$length_of_digits" ]]; then
    echo "slice length cannot be greater than series length"
    exit 1
  fi

  declare -a substrings=()

  for ((i=0; i <= length_of_digits - length; i++)); do
    substring=${digits:i:length}
    substrings+=("$substring")
  done

  echo ${substrings[@]}
}

main "$@"
