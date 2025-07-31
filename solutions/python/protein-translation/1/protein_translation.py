def proteins(strand):
    chunks = chunkerize(strand, 3)
    translation = []

    for chunk in chunks:
        translated_chunk = translate(chunk)
        if translated_chunk == "STOP":
            break
        translation.append(translated_chunk)

    return translation


def chunkerize(strand, size=3):
    if len(strand) == size:
        return [strand]
    else:
        chunks = []
        for i in range(0, len(strand), size):
            chunk = strand[i:i + size]
            chunks.append(chunk)

        return chunks


def translate(codon):
    match codon:
        case "AUG":
            return "Methionine"
        case "UUU" | "UUC":
            return "Phenylalanine"
        case "UUA" | "UUG":
            return "Leucine"
        case "UCU" | "UCC" | "UCA" | "UCG":
            return "Serine"
        case "UAU" | "UAC":
            return "Tyrosine"
        case "UGU" | "UGC":
            return "Cysteine"
        case "UGG":
            return "Tryptophan"
        case "UAA" | "UAG" | "UGA":
            return "STOP"


proteins("UUUUAGAUG")
