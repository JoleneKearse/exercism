(import (rnrs))

(define (dna->rna dna)
  (let loop ((nucleotides (string->list dna)) (result ""))
    (cond 
      ((null? nucleotides) result)
      ((char=? (car nucleotides) #\G) (loop (cdr nucleotides) (string-append result "C")))
      ((char=? (car nucleotides) #\C) (loop (cdr nucleotides) (string-append result "G")))
      ((char=? (car nucleotides) #\T) (loop (cdr nucleotides) (string-append result "A")))
      ((char=? (car nucleotides) #\A) (loop (cdr nucleotides) (string-append result "U")))
      (else (error "Invalid nucleotide"))
    ))
)

