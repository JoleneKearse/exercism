Red [
	description: {"Two-fer" exercise solution for exercism platform}
	author: "jolene"
]

two-fer: function [
	name [string! none!]
] [
	either none? name [
		rejoin ["One for you, one for me."]
	][
		rejoin ["One for " name ", one for me."]
	]
]