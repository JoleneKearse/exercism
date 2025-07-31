export function hey(message: string): string {
  // trim whitespace
  const trimmedMsg = message.trim()
  // check for letter case
  const hasUpperCase = /[A-Z]/.test(trimmedMsg)
  const hasLowerCase = /[a-z]/.test(trimmedMsg)
  const endsWithQuestionMark = /\?$/.test(trimmedMsg)

  if (!hasLowerCase && hasUpperCase && endsWithQuestionMark) {
    // yelling question
    return "Calm down, I know what I'm doing!"
  }
  else if (!hasLowerCase && hasUpperCase) {
    // if yelling
    return "Whoa, chill out!"
  } else if (endsWithQuestionMark) {
    // if question
    return "Sure."
  } else if (trimmedMsg === "") {
    // whitespace
    return "Fine. Be that way!"
  }
  else {
    // everything else
    return "Whatever."
  }
}
