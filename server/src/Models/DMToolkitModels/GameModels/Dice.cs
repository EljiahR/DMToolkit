namespace DMToolkit.Models.GameModels;

public class Dice
{
    public int DiceSides {get; set;}
    public int NumberOfDice {get; set;}
    private Random random {get; set;}
    
    public Dice(int diceSides, int numberOfDice = 1)
    {
        DiceSides = diceSides;
        NumberOfDice = numberOfDice;
        random = new();
    }
    
    public int Roll()
    {
        int rollTotal = 0;
        for (int i = 0; i < NumberOfDice; i++)
            rollTotal += random.Next(1, DiceSides + 1);
        return rollTotal;
    }
    
    public override string ToString()
    {
        return $"{NumberOfDice}d{DiceSides}";
    }
}