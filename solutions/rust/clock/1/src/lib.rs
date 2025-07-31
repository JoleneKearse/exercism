use std::fmt;

const MAX_DURATION: i32 = 60;
const HOURS_PER_DAY: i32 = 24;

#[derive(Debug, PartialEq, Eq)]
pub struct Clock {
    hours: i32,
    minutes: i32,
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        Clock {
            hours: (hours + minutes.div_euclid(MAX_DURATION)).rem_euclid(HOURS_PER_DAY),
            minutes: minutes.rem_euclid(MAX_DURATION),
        }
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        Clock::new(self.hours, self.minutes + minutes)
    }
}

impl fmt::Display for Clock {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:02}:{:02}", self.hours, self.minutes)
    }
}
