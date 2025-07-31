#include <string>
namespace log_line {
    std::string message(const std::string& m) {
        return m.substr(m.find(':') + 2); // substring after ": "
    }
    std::string log_level(const std::string& m) {
        return m.substr(1, m.find(']') - 1); // substring between "[" and "]"
    }
    std::string reformat(const std::string& m) {
        return message(m) + " (" + log_level(m) + ")";
    }
} // namespace log_line
