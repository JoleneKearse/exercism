Red [
	description: {"Reverse string" exercise solution for exercism platform}
	author: "jolene"
]

reverse: function [
	"Reverses a string"
	input [string!] "String to reverse"
	return: [string!]
] [
	;cause-error 'user 'message ["You need to implement this function."]
	output: ""
	foreach character input [
		output: rejoin [character output]
	] return output
]

