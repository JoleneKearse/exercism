export function toRna(dna: string): string {
  let rna = ""
  const nucleotideConversion: { [key: string]: string } = {
    "G": "C", "C": "G", "T": "A", "A": "U"
  } 
  dna.split("").forEach(nucleotide => {
    if (!(nucleotide in nucleotideConversion)) { throw new Error("Invalid input DNA.")}
    rna += nucleotideConversion[nucleotide]
  })
  return rna
}
