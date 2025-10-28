using DMToolkit.API.Models.DMToolkitModels.Definitions;

namespace DMToolkit.API.Data.Seed.SeedData.Definitions;

public static class SpeciesDefinitionSeedData
{
    public static readonly SpeciesDefinition StonebornDefinition = new()
    {
        Name = "Stoneborn",
        Description = "Forged by the slow patience of the mountains, Stoneborn are sturdy beings with skin like granite and hearts that beat in rhythm with the earth itself. They value endurance, tradition, and the slow but unstoppable progress of time.",
        Type = "Humanoid",
        Speed = 25,
        Sizes = ["Medium"],
        FeatDefinitions = new List<FeatDefinition>()
        {
            FeatDefinitionSeedData.EnduringResilienceDefinition
        }
    };

    public static readonly SpeciesDefinition AetherbornDefinition = new()
    {
        Name = "Aetherborn",
        Description = "Aetherborn are ephemeral beings formed of condensed magical energy and fading memories. Their forms shimmer with faint light, and their voices carry an otherworldly resonance.",
        Type = "Elemental",
        Speed = 30,
        Sizes = ["Medium"],
        FeatDefinitions = new List<FeatDefinition>
        {
            FeatDefinitionSeedData.EssenceOverflowDefinition
        }
    };

    public static readonly List<SpeciesDefinition> AllSpecies = new()
    {
        StonebornDefinition,
        AetherbornDefinition
    };
}