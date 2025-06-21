namespace DMTools.Models.Items.Generic;

public class CoinPouch : Item
{
    
    public CoinPouch(int cp = 0, int sp = 0, int ep = 0, int gp = 0, int pp = 0) : base("Coin Pouch", 0f, new(cp, sp, ep, gp, pp))
    {
    }

    public override string ToString()
    {
        return ItemWorth.ToString();
    }
}