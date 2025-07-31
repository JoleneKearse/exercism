Red [
	description: {"Protein Translation" exercise solution for exercism platform}
	author: "jolene"
]

rna-to-codons: function [
	strand
] [
	chunks: []
	i: 1
	while [i <= length? strand] [
		chunk: copy/part at strand i 3
		append chunks chunk
		i: i + 3
	]
	return chunks
]

codon-to-protein: function [
	codon
] [
	switch codon [
		"AUG" [return "Methionine"]
		"UUU" [return "Phenylalanine"]
		"UUC" [return "Phenylalanine"]
		"UUA" [return "Leucine"]
		"UUG" [return "Leucine"]
		"UCU" [return "Serine"]
		"UCC" [return "Serine"]
		"UCA" [return "Serine"]
		"UCG" [return "Serine"]
		"UAU" [return "Tyrosine"]
		"UAC" [return "Tyrosine"]
		"UGU" [return "Cysteine"]
		"UGC" [return "Cysteine"]
		"UGG" [return "Tryptophan"]
		"UAA" [return "STOP"]
		"UAG" [return "STOP"]
		"UGA" [return "STOP"]
	]
]

proteins: function [
	strand
] [
	codons: rna-to-codons strand
	proteins: []
	foreach codon codons [
		protein: codon-to-protein codon
		if protein = "STOP" [break]
		append proteins protein
	]
	return proteins
]