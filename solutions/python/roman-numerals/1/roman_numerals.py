def roman(number):
    romanNumeral = ""
    lookupTable = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1,
    }

    for key, value in lookupTable.items():
        while number >= value:
            romanNumeral += key
            number -= value

    return romanNumeral
