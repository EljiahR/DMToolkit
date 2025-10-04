using DMToolkit.Models.Definitions;

namespace DMToolkit.Data.Seeders.SeedData;

public static class LineageDefinitionSeedData
{
    public static readonly LineageDefinition LuminarDefinition = new()
    {
        Name = "Luminar",
        Description = "Luminar Aetherborn radiate light and warmth, their essence stable and benevolent.",
        FeatDefinitions = new List<FeatDefinition>() { FeatDefinitionSeedData.RadiantPulseDefinition },
        SpeciesDefinition = SpeciesDefinitionSeedData.AetherbornDefinition
    };

    public static readonly LineageDefinition UmbralDefinition = new()
    {
        Name = "Umbral",
        Description = "The Umbral are born from fading energy and shadow, embodying entropy and silence.",
        FeatDefinitions = new List<FeatDefinition>() { FeatDefinitionSeedData.VeilOfDuskDefinition },
        SpeciesDefinition = SpeciesDefinitionSeedData.AetherbornDefinition
    };

    public static readonly LineageDefinition BasaltBloodDefinition = new()
    {
        Name = "Basaltblood",
        Description = "Basaltbloods are darker-skinned Stoneborn who channel their inner pressure into explosive bursts of might when under duress.",
        FeatDefinitions = new List<FeatDefinition>() { FeatDefinitionSeedData.MoltenSurgeDefinition },
        SpeciesDefinition = SpeciesDefinitionSeedData.StonebornDefinition
    };

    public static readonly LineageDefinition GranitekinDefinition = new()
    {
        Name = "Granitekin",
        Description = "Pale, dense, and seemingly immovable, Granitekin are known for withstanding punishment that would crumble lesser beings.",
        FeatDefinitions = new List<FeatDefinition>() { FeatDefinitionSeedData.UnyieldingFormDefinition },
        SpeciesDefinition = SpeciesDefinitionSeedData.StonebornDefinition
    };

    public static readonly List<LineageDefinition> AllLineages = new()
    {
        LuminarDefinition,
        UmbralDefinition,
        BasaltBloodDefinition,
        GranitekinDefinition
    };
}