namespace DMToolkit.Models.Features;

public class ParentFeature : Feature // features that are made up of multiple effects that may as well be seperate features
{
    public Feature[] ChildFeatures {get; set;}
    
    public ParentFeature(string name, string category, Feature[] childFeatures, string prerequisiteType = "", int prerequisiteAmount = 0) : base(name, "You gain the following benefits", category, prerequisiteType, prerequisiteAmount)
    {
        ChildFeatures = childFeatures;
    }
}