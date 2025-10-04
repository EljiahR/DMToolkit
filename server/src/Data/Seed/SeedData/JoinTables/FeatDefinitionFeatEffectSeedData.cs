using DMToolkit.Models.JoinTables;

namespace DMToolkit.Data.Seeders.SeedData;

public static class FeatDefinitionFeatEffectSeedData
{
    public static readonly List<FeatDefinitionFeatEffect> SharpshooterTable = FeatEffectSeedData.SharpshooterEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.SharpshooterDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> ToughTable = FeatEffectSeedData.ToughEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.ToughDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> PhilosopherInsightTable = FeatEffectSeedData.PhilosopherInsightEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.PhilosopherInsightDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> TravelersResilienceEffectsTable = FeatEffectSeedData.TravelersResilienceEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.TravelersResilienceDefinition.Id, FeatEffectId = e.Id }).ToList();
}