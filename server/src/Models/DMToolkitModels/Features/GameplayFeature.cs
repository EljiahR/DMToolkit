namespace DMToolkit.Models.Features;

public class GameplayFeature : Feature // features that affect gameplay in more direct ways
{
    public string AffectedElement {get;}
    
    public GameplayFeature(string name, string description, string category, string affectedElement, string prerequisiteType = "", int prerequisiteAmount = 0) : base(name, description, category, prerequisiteType, prerequisiteAmount)
    {
        AffectedElement = affectedElement;
    }
}