(module 
  (func (export "steps") (param $number i32) (result i32)
    (local $count i32)

  ;; check if negative
    local.get $number
    i32.const 1
    i32.lt_s
    if
      i32.const -1
      return 
    end

    ;; initialize $count to 0
    i32.const 0
    local.set $count

    ;; block to exit loop
    (block $exit
            (loop $collatz
        ;; check if 1 and return, else continue
        local.get $number
        i32.const 1
        i32.eq
        br_if $exit

        ;; even/odd check
        local.get $number
        i32.const 2
        i32.rem_u
        i32.eqz
        if
          ;; divide even numbers by 2
          local.get $number
          i32.const 2
          i32.div_u
          local.set $number
        else
          ;; multiply by 3 add 1
          local.get $number
          i32.const 3
          i32.mul
          i32.const 1
          i32.add
          local.set $number
        end

        ;; increment count
        local.get $count
        i32.const 1
        i32.add
        local.set $count

        br $collatz
      )
    )
    local.get $count
    return
  )
)
