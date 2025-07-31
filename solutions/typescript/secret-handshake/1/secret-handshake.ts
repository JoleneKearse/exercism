export function commands(num: number): string[] {
  const sequence: string[] = []
  const binary = num.toString(2).substring(-5)
  if (num & 1) {
    sequence.push("wink")
  }
  if (num & 2) {
    sequence.push("double blink")
  }
  if (num & 4) {
    sequence.push("close your eyes")
  }
  if (num & 8) {
    sequence.push("jump")
  }
  if (num & 16) {
    sequence.reverse()
  }
  return sequence
}
