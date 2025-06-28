using DMToolkit.Models.Features;

namespace DMToolkit.Models.ClassModels;

public class ClassInstance
{
    private int _level {get; set;}
    public int Level 
    {
        get => _level; 
        set => _level = Math.Clamp(value, 1, 30);
    }
    public CharacterClass PlayerClass {get; set;}
    public Subclass? Subclass {get; set;}
    public List<FeatureInstance> Features {get; set;}
    public ClassInstance(CharacterClass playerClass, List<FeatureInstance> features, int level = 1, Subclass? subclass = null)
    {
        PlayerClass = playerClass;
        Level = level;
        Subclass = subclass;
        Features = features;
    }
}