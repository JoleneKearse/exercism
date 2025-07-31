// This function takes in a year.
// If the year is evenly divisible by 4, but not 100 unless also by 400 returns true, else false
package leap

// IsLeapYear should have a comment documenting it.
func IsLeapYear(year int) bool {
	if year%4 == 0 {
		return year%100 != 0 || year%400 == 0
	} else {
		return false
	}
}
