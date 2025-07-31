export class Anagram {
  private subject: string
  constructor(input: string) {
    this.subject = input.toLowerCase()
  }

  private countLetters(word: string): { [key: string]:number } {
    const letterCount: { [key: string]: number } = {}
    for (const letter of word) {
      letterCount[letter] = (letterCount[letter] || 0) + 1
    }
    return letterCount
  }

  public matches(...potentials: string[]): string[] {
    const anagrams: string[] = []
    const targetLetterCount = this.countLetters(this.subject)

    for (const word of potentials) {
      const lowerWord = word.toLowerCase()
      const potentialsLetterCount = this.countLetters(lowerWord)
      let isAnagram = true
      
      for (const key in targetLetterCount) {
        if (targetLetterCount[key] !== potentialsLetterCount[key]) {
          isAnagram = false
          break
        }
      }

      if (isAnagram && Object.keys(targetLetterCount).length === Object.keys(potentialsLetterCount).length && lowerWord !== this.subject ) {
        anagrams.push(word)
        // console.log(anagrams)
      }
    }
    return anagrams
  }
}

const subject = new Anagram('solemn')
const matches = subject.matches('lemons', 'cherry', 'melons')