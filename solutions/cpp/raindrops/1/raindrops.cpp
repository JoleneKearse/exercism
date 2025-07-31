#include "raindrops.h"
#include <string>

namespace raindrops
{
    std::string convert(int num)
    {
        std::string changed{""};

        if (num % 3 == 0)
            changed += "Pling";
        if (num % 5 == 0)
            changed += "Plang";
        if (num % 7 == 0)
            changed += "Plong";
        if (changed.empty())
            changed += std::to_string(num);
        return changed;
    }
} // namespace raindrops
