(module
  (func (export "isLeap") (param $year i32) (result i32)
    ;; return 1 for leap, 0 for not
    ;; check if divisible by 4
    local.get $year
    i32.const 4
    i32.rem_u
    i32.eqz
    ;; return 0 and exit if divisible by 4
    if (result i32)
      (i32.or 
        ;; check if not century year
        (i32.ne
          (i32.rem_u (local.get $year) (i32.const 100))
          (i32.const 0)
        )
        ;; check if divisible by 400
        (i32.eqz
          (i32.rem_u (local.get $year) (i32.const 400))
        )
      )
    else
      i32.const 0
    end
  )
)
