using DMTools.Models.Features;

namespace DMTools.Models.SpeciesModels;

// This might not be needed at all
public class Lineage
{
    public string Name {get; set;}
    public Species BaseSpecies;
    public Feature LineageFeature {get; set;}
    public Lineage(string name, Species baseSpecies, Feature feature)
    {
        Name = name;
        BaseSpecies = baseSpecies;
        baseSpecies.Lineages.Add(this);
        LineageFeature = feature;
    }
}