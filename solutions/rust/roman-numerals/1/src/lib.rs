use std::fmt::{Display, Formatter, Result};

pub struct Roman {
    result: String,
}

impl Display for Roman {
    fn fmt(&self, _f: &mut Formatter<'_>) -> Result {
        write!(_f, "{}", self.result)
    }
}

impl From<u32> for Roman {
    fn from(num: u32) -> Self {
        let mut num = num;
        let mut result = String::new();

        let lookup_table = vec![
            (1000, "M"),
            (900, "CM"),
            (500, "D"),
            (400, "CD"),
            (100, "C"),
            (90, "XC"),
            (50, "L"),
            (40, "XL"),
            (10, "X"),
            (9, "IX"),
            (5, "V"),
            (4, "IV"),
            (1, "I"),
        ];

        for (value, roman) in &lookup_table {
            println!("{}", value);
            while num >= *value {
                println!("{} {}", num, *value);
                result += roman;
                num -= *value;
            }
        }

        Self { result }
    }
}
