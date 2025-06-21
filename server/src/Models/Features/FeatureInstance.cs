namespace DMTools.Models.Features;

public class FeatureInstance // All features will be an instance to account for features that require a choice to be made
{
    public Feature Feat {get;}
    public string? ChosenStat {get; set;}
    public Feature? ChosenFeat {get; set;} // Might remove this, we'll see
    
    public FeatureInstance(Feature feat)
    {
        Feat = feat;
    }
}