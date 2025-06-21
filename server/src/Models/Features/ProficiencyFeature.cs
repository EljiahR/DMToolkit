namespace DMTools.Models.Features;

public class ProficiencyFeature : Feature // features that add your proficiency bonus to a stat
{
    public string AffectedStat {get;}
    
    public ProficiencyFeature(string name, string description, string category, string affectedStat, string prerequisiteType = "", int prerequisiteAmount = 0) : base(name, description, category, prerequisiteType, prerequisiteAmount)
    {
        AffectedStat = affectedStat;
    }
}