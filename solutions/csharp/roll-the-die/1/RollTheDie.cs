using System;

public class Player
{
    public int RollDie()
    {
        var die = new Random();
        return die.Next(1, 18);
    }

    public double GenerateSpellStrength()
    {
        var random = new Random();
        return random.NextDouble() * 100;
    }
}
