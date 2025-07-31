
(module
  (memory (export "mem") 1)

  (func (export "parse") (param $offset i32) (param $length i32) (result i32 i32) (local $char i32) (local $strCursor i32) (local $acronymCursor i32) (local $write i32)
    (local.set $write (i32.const 1))
   
    ;; loop on each char
    (loop $char_loop
      (block $break

        (i32.load8_u ;; current char
          (i32.add
            (local.get $offset)
            (local.get $strCursor)))
        (local.set $char)

        (call $isSeparator (local.get $char))
        (if ;; do not write separator
          (then
            (local.set $write (i32.const 1))) ;; the next char maybe written
          (else
            (local.get $write)
            (if(then ;; the current char come after a separator
              (i32.store8 ;; store it in upper case
                (local.get $acronymCursor)
                (call $toUpper (local.get $char)))
              (i32.add ;; inc acronyme cursor
                (i32.const 1)
                (local.get $acronymCursor))
              (local.set $acronymCursor)
              (local.set $write (i32.const 0))))))

        ;; inc string cursor
        (i32.add
          (i32.const 1)
          (local.get $strCursor))
        (local.tee $strCursor)
       
        ;; all char analyzed ?
        (local.get $length)
        (i32.eq)
        br_if $break
        br $char_loop
    ))
   
    (return (i32.const 0) (local.get $acronymCursor))
  )

  ;; detect separator
  (func $isSeparator (param i32) (result i32)
    (i32.or
      (i32.eq
        (local.get 0)
        (i32.const 0x5f)) ;; _
      (i32.or
        (i32.eq
          (local.get 0)
          (i32.const 0x20)) ;; SPACE
        (i32.eq
          (local.get 0)
          (i32.const 0x2d)))) ;; -
  )

  ;; transform ASCII lower case to upper case
  (func $toUpper (param i32) (result i32)
    (call $inRange (local.get 0) (i32.const 0x61) (i32.const 0x7A))
    (if(then
      (return (i32.sub
        (local.get 0)
        (i32.const 0x20)))))

    (local.get 0) ;; default
  )

  ;; number $min <= $n <= $max
  (func $inRange (param $n i32) (param $min i32) (param $max i32) (result i32)
    (i32.and
      (i32.ge_s
        (local.get $n)    
        (local.get $min))
      (i32.le_s
        (local.get $n)
        (local.get $max)))
  )
)
