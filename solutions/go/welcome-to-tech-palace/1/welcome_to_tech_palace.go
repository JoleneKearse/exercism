package techpalace

import (
    "fmt";
	"strings"
)

// WelcomeMessage returns a welcome message for the customer.
func WelcomeMessage(customer string) string {
	name := strings.ToUpper(customer)
	return "Welcome to the Tech Palace, " + name
}

// AddBorder adds a border to a welcome message.
func AddBorder(welcomeMsg string, numStarsPerLine int) string {
	stars := strings.Repeat("*", numStarsPerLine)
	return fmt.Sprintf("%s\n%s\n%s", stars, welcomeMsg, stars)
}

// CleanupMessage cleans up an old marketing message.
func CleanupMessage(oldMsg string) string {
	removeStars := strings.ReplaceAll(oldMsg, "*", "")
	cleanMsg := strings.TrimSpace(removeStars)
	return cleanMsg
}
