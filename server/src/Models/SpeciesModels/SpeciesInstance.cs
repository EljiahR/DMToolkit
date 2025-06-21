using DMTools.Models.Features;

namespace DMTools.Models.SpeciesModels;

// Not sure if entirely necessary but just to be safe
public class SpeciesInstance 
{
    public Species PlayerSpecies {get; set;}
    public Lineage? PlayerLineage {get; set;}
    // public Subspecies PlayerSubspecies {get; set;}
    public string Size {get; set;} // Some species can select size
    public Feature[] SpeciesFeatures {get; set;}
    public SpeciesInstance(Species species, Lineage? lineage, string size, Feature[] features)
    {
        PlayerSpecies = species;
        PlayerLineage = lineage;
        Size = size;
        SpeciesFeatures = features;
    }
}