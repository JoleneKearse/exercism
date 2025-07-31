using System;

public static class Pangram
{
    public static bool IsPangram(string input)
    {
        if (String.IsNullOrEmpty(input))
        {
            return false;
        }

        input = input.ToLower();

        for (char c = 'a'; c <= 'z'; c++)
        {
            if (!input.Contains(c))
            {
                return false;
            }
        }
        return true;
    }
}
