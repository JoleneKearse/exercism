// Package weather provides tools to forecast the current weather conditions of various cities in Goblinocus.
package weather

// CurrentCondition represents the current weather conditions.
var CurrentCondition string

// CurrentLocation represents the current city in Goblinocus.
var CurrentLocation string

// Forecast returns a statement about a city and it's current weather.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
