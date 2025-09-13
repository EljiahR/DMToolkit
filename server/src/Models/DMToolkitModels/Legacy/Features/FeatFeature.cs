namespace DMToolkit.Models.Features;

public class FeatFeature : Feature // I apologize for the name, not very creative, these features are basically just a choice for another feature, might get rid of entirely and do another way
{
    public string FeatureCategory {get;}
    
    public FeatFeature(string name, string description, string category, string featureCategory, string prerequisiteType = "", int prerequisiteAmount = 0) : base(name, description, category, prerequisiteType, prerequisiteAmount)
    {
        FeatureCategory = featureCategory;
    }
}