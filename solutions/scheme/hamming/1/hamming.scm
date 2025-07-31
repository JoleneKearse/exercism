(import (rnrs))

(define (hamming-distance strand-a strand-b)
  (let* ((list-a (string->list strand-a))
         (list-b (string->list strand-b)))
    (cond 
      ((< (length list-a) (length list-b)) (error "disallow first strand longer"))
      ((> (length list-a) (length list-b)) (error "disallow second strand longer"))
      (else 
        (let* ((count 0))
          (let loop ((dna-a list-a) (dna-b list-b) (count count))
            (if (null? dna-a)
                count
                (loop (cdr dna-a)
                      (cdr dna-b)
                      (if (not (char=? (car dna-a) (car dna-b)))
                          (+ count 1)
                          count)))))))))
