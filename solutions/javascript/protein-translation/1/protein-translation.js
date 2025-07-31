export const translate = (sequence) => {
  if (sequence === "" || sequence === undefined) return [];

  const chunks = codonChunks(sequence);
  const proteins = assembleProteins(chunks);

  if (proteins.includes("STOP")) {
    return proteins.slice(0, proteins.indexOf("STOP"));
  }

  if (sequence.length % 3 !== 0 || proteins.includes("ERROR")) {
    throw new Error("Invalid codon");
  }
  return proteins;
};

function codonChunks(sequence) {
  const chunks = [];
  while (sequence?.length >= 3) {
    chunks.push(sequence.slice(0, 3));
    sequence = sequence.slice(3);
  }
  return chunks;
}

function assembleProteins(chunks) {
  const proteins = [];
  for (let chunk of chunks) {
    switch (chunk) {
      case "AUG":
        proteins.push("Methionine");
        break;
      case "UUU":
      case "UUC":
        proteins.push("Phenylalanine");
        break;
      case "UUA":
      case "UUG":
        proteins.push("Leucine");
        break;
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
        proteins.push("Serine");
        break;
      case "UAU":
      case "UAC":
        proteins.push("Tyrosine");
        break;
      case "UGU":
      case "UGC":
        proteins.push("Cysteine");
        break;
      case "UGG":
        proteins.push("Tryptophan");
        break;
      case "UAA":
      case "UAG":
      case "UGA":
        proteins.push("STOP");
        break;
      default:
        proteins.push("ERROR");
    }
  }
  return proteins;
}
