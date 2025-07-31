export function isPangram(str: string): boolean{
  return new Set(str.toLowerCase().replace(/[^a-z]/g, '')).size === 26
}
