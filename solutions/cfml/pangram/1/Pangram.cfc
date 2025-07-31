component {

    function isPangram( sentence ) {
		alphabet = "abcdefghijklmnopqrstuvwxyz"
		alphabet = listToArray(alphabet, "")
		for (char in alphabet) {
			if (findNoCase(char, sentence) == 0) {
                return false
            }
		}
		return true
	}
	
}