/**
* Your implementation of the Bob exercise
*/
component {
	
	/**
	* @returns 
	*/
	function response( heyBob ) {
        question = "^.+\?\s*$"
        yelling = "^(?=.*[A-Z])[A-Z0-9\s\W]+$"
        silence = "^$|^\s*$"
        
        if (heyBob IS "") {
            return "Fine. Be that way!"
        }
        else if (REFind(yelling, heyBob)) {
            if (REFind(question, heyBob)) {
                return "Calm down, I know what I'm doing!"
            }
            else {
                return "Whoa, chill out!"
            }
        }
        else if (REFind(question, heyBob)) {
            return "Sure."
        }
        else if (REFind(silence, heyBob)) {
            return "Fine. Be that way!"
        }
        else {
            return "Whatever."
        }

	}
	
}