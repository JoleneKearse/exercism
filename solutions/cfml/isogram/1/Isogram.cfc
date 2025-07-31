/**
* Your implementation of the Isogram exercise
*/
component {
	
	/**
	* @returns 
	*/
    function isIsogram( input ) {
        uniqueChars = {}
        lowercase = LCase(input)
        onlyLetters = REReplaceNoCase(lowercase, "[^a-z]", "", "all")

        for (char in listToArray(onlyLetters, "")) {
            if (structKeyExists(uniqueChars, char)) {
                return false
            }
            uniqueChars[char] = 1
        }
        return true
    }
}