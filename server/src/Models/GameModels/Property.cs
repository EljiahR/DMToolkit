namespace DMToolkit.Models.GameModels;

public abstract class Property // Temp until I can think of how to implement these, might even cram everything into feats
{
    public string Name {get; set;}
    public string Description {get; set;}
    public PropertyEffect? Effect {get; set;}
    public Property(string name, string description, PropertyEffect? effect)
    {
        Name = name;
        Description = description;
        Effect = effect;
    }
}