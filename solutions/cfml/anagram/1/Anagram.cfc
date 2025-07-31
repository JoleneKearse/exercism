component {
	
    function anagrams( string subject, array candidates ) {
		cleanedSubject = cleanString(subject)
		return candidates.filter(function(candidate){
			return candidate.UCase() != subject.UCase() && cleanString(candidate) == cleanedSubject
		})
	}
    
	function cleanString(target) {
		return target.UCase()
					.listToArray('')
					.sort('text')
					.toList()
	}
}