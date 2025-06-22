namespace DMToolkit.Models.Features;

public abstract class Feature
{
    public string Name {get;}
    public string Description {get;}
    public string Category {get;}
    public string PrerequisiteType {get;}
    public int PrerequisiteAmount {get;}
    
    protected Feature(string name, string description, string category, string prerequisiteType = "", int prerequisiteAmount = 0)
    {
        Name = name;
        Description = description;
        Category = category;
        PrerequisiteType = prerequisiteType;
        PrerequisiteAmount = prerequisiteAmount;
    }
}