using System;

public static class PigLatin
{
    public static string Translate(string sentence)
    {
        char[] vowels = { 'a', 'e', 'i', 'o', 'u' };
        string[] words = sentence.Split(' ');
        string result = "";

        foreach (string word in words)
        {
            string translatedWord;

            // starts with qu
            if (word.Substring(0, 2) == "qu")
            {
                translatedWord = word.Substring(2) + "quay";
            }
            // starts with xr/yt
            else if (word.Substring(0, 2) == "xr" || word.Substring(0, 2) == "yt")
            {
                translatedWord = word + "ay";
            }
            // starts with y
            else if (word[0] == 'y')
            {
                translatedWord = word.Substring(1) + word[0] + "ay";
            }
            // has 1 consonant followed by a y
            else if (Array.IndexOf(vowels, word[0]) == -1 && word[1] == 'y')
            {
                translatedWord = word.Substring(1) + word[0] + "ay";
            }
            //has 2 consonants followed by a y
            else if (Array.IndexOf(vowels, word[0]) == -1 && Array.IndexOf(vowels, word[1]) == -1 && word[2] == 'y')
            {
                translatedWord = word.Substring(2) + word.Substring(0, 2) + "ay";
            }
            // starts with a consonant followed by qu
            else if (Array.IndexOf(vowels, word[0]) == -1 && word[1] == 'q' && word[2] == 'u')
            {
                translatedWord = word.Substring(3) + word.Substring(0, 3) + "ay";
            }
            // starts with three consonants
            else if (Array.IndexOf(vowels, word[0]) == -1 && Array.IndexOf(vowels, word[1]) == -1 && Array.IndexOf(vowels, word[2]) == -1)
            {
                translatedWord = word.Substring(3) + word.Substring(0, 3) + "ay";
            }
            // starts with two consonants
            else if (Array.IndexOf(vowels, word[0]) == -1 && Array.IndexOf(vowels, word[1]) == -1)
            {
                translatedWord = word.Substring(2) + word.Substring(0, 2) + "ay";
            }
            // starts with consonant
            else if (Array.IndexOf(vowels, word[0]) != -1)
            {
                translatedWord = word + "ay";
            }
            // starts with a single vowel
            else
            {
                translatedWord = word.Substring(1) + word[0] + "ay";
            }
            result += translatedWord + " ";
        }
        return result.Trim();
    }
}