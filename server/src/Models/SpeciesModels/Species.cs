using DMToolkit.Models.Features;

namespace DMToolkit.Models.SpeciesModels;

public class Species
{
    public string Name {get; set;}
    public string Type {get; set;}
    // Can't remember if these can be changed by subspecies so here for now
    public int Speed {get; set;}
    public string[] Size {get; set;}
    public Feature[] Features {get; set;}
    public List<Lineage> Lineages {get; set;} = new();
    public Species(string name, string type, int speed, string[] size, Feature[] features)
    {
        Name = name;
        Type = type;
        Speed = speed;
        Size = size;
        Features = features;
    }
}