Red [
	description: {"Raindrops" exercise solution for exercism platform}
	author: "jolene"
]

convert: function [
	number
] [
	result: copy "" 
	if 0 = mod number 3 [append result "Pling"]
	if 0 = mod number 5 [append result "Plang"]
	if 0 = mod number 7 [append result "Plong"]
	if "" = result [result: form number]
	return result
]

