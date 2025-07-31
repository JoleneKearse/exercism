Red [
	description: {"Reverse string" exercise solution for exercism platform}
	author: "jolene"
]

reverse: function [
	"Reverses a string"
	input [string!] "String to reverse"
	return: [string!]
] [
	reverse copy input
]

