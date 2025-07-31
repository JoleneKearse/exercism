(module
  (memory (export "mem") 1)

  (func (export "reverseString") (param $offset i32) (param $length i32) (result i32 i32)
    ;; local variables
    (local $front i32)
    (local $back i32)
    (local $tempChar i32)

    ;; assign front
    local.get $offset
    local.set $front

    ;; assign back
    local.get $offset
    local.get $length
    i32.add
    i32.const 1
    i32.sub
    local.set $back

    (block $exitLoop
      (loop $swapChars
        ;; check if front less than back
        local.get $front
        local.get $back
        i32.ge_u
        br_if $exitLoop

        ;; swap chars
        local.get $front
        i32.load8_u
        local.set $tempChar

        local.get $front
        local.get $back
        i32.load8_u
        i32.store8

        local.get $back
        local.get $tempChar
        i32.store8

        ;; increment front & back
        local.get $front
        i32.const 1
        i32.add
        local.set $front

        local.get $back
        i32.const 1
        i32.sub
        local.set $back

        br $swapChars
      )
    )

    (return (local.get $offset) (local.get $length))
  )
)

