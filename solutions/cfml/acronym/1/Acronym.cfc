/**
* Your implementation of the Acronym exercise
*/
component {
	
	/**
	* @returns 
	*/
	 function abbreviate( phrase ) {
		abbr = ""
        phrase = Replace(phrase, " ", "-", "all")
        for (word in ListToArray(phrase, "-")) {
            abbr = abbr & UCase(Left(word, 1))
        }
        return abbr
	}
	
}