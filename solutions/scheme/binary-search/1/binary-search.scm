(import (rnrs))

(define (binary-search vect target)
  (let loop ((low 0) (high (- (vector-length vect) 1)))
    (if (> low high)
      'not-found
      (let* ((mid (quotient (+ low high) 2))
            (mid-val (vector-ref vect mid)))
          (cond
            ((= mid-val target) mid)
            ((< mid-val target) (loop (+ mid 1) high))
            (else (loop low (- mid 1))))))))
