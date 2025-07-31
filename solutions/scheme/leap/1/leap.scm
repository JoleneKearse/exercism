(import (rnrs))

(define (leap-year? year)
  (if (and (= (modulo year 4) 0) 
    (or (not (= (modulo year 100) 0))
      (= (modulo year 400) 0)))
    #t
    #f))

