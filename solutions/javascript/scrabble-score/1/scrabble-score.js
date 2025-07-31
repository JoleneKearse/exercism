export const score = (scrabbleLetters) => {
  const letterScore1Letters = "A, E, I, O, U, L, N, R, S, T";
  const letterScore2Letters = "D, G";
  const letterScore3Letters = "B, C, M, P";
  const letterScore4Letters = "F, H, V, W, Y";
  const letterScore5Letters = "K";
  const letterScore8Letters = "J, X";
  const letterScore10Letters = "Q, Z";
  const letterScore1Value = 1;
  const letterScore2Value = 2;
  const letterScore3Value = 3;
  const letterScore4Value = 4;
  const letterScore5Value = 5;
  const letterScore8Value = 8;
  const letterScore10Value = 10;

  let currentScore = 0;

  if (scrabbleLetters === "") return 0;

  const currentEntry = scrabbleLetters.toUpperCase();

  currentEntry.split("").forEach((letter) => {
    if (letterScore1Letters.includes(letter)) {
      currentScore += letterScore1Value;
    }
    if (letterScore2Letters.includes(letter)) {
      currentScore += letterScore2Value;
    }
    if (letterScore3Letters.includes(letter)) {
      currentScore += letterScore3Value;
    }
    if (letterScore4Letters.includes(letter)) {
      currentScore += letterScore4Value;
    }
    if (letterScore5Letters.includes(letter)) {
      currentScore += letterScore5Value;
    }
    if (letterScore8Letters.includes(letter)) {
      currentScore += letterScore8Value;
    }
    if (letterScore10Letters.includes(letter)) {
      currentScore += letterScore10Value;
    }
  });

  return currentScore;
};
