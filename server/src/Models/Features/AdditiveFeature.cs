namespace DMToolkit.Models.Features;

public class AdditiveFeature: Feature // features that add a set amount to something
{
    public string AffectedStat {get;}
    public int Amount {get;}
    
    public AdditiveFeature(string name, string description, string category, string affectedStat, int amount, string prerequisiteType = "", int prerequisiteAmount = 0) : base(name, description, category, prerequisiteType, prerequisiteAmount)
    {
        AffectedStat = affectedStat;
        Amount = amount;
    }
}