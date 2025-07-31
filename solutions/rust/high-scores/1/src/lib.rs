#[derive(Debug)]
pub struct HighScores {
    scores: Vec<u32>,
}

impl HighScores {
    pub fn new(scores: &[u32]) -> Self {
        HighScores {
            scores: scores.to_vec(),
        }
    }

    pub fn scores(&self) -> &[u32] {
        &self.scores
    }

    pub fn latest(&self) -> Option<u32> {
        let score_vector = self.scores();
        if let Some(last_score) = score_vector.last() {
            Some(*last_score)
        } else {
            None
        }
    }

    pub fn personal_best(&self) -> Option<u32> {
        let score_vector = self.scores();
        if let Some(max_score) = score_vector.iter().max() {
            Some(*max_score)
        } else {
            None
        }
    }

    pub fn personal_top_three(&self) -> Vec<u32> {
        let mut scores = self.scores().to_vec();
        scores.sort_by(|a, b| b.cmp(a));
        scores.iter().take(3).cloned().collect()
    }
}
