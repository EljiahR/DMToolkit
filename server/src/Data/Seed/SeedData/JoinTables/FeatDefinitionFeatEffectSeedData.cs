using DMToolkit.Models.JoinTables;

namespace DMToolkit.Data.Seeders.SeedData;

public static class FeatDefinitionFeatEffectSeedData
{
    public static readonly List<FeatDefinitionFeatEffect> SharpshooterTable = FeatEffectSeedData.SharpshooterEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.SharpshooterDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> ToughTable = FeatEffectSeedData.ToughEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.ToughDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> PhilosopherInsightTable = FeatEffectSeedData.PhilosopherInsightEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.PhilosopherInsightDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> TravelersResilienceEffectsTable = FeatEffectSeedData.TravelersResilienceEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.TravelersResilienceDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> HoldTheLineEffectsTable = FeatEffectSeedData.HoldTheLineEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.HoldTheLineDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> IronStaminaEffectsTable = FeatEffectSeedData.IronStaminaEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.IronStaminaDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> FocusChannelEffectsTable = FeatEffectSeedData.FocusChannelEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.FocusChannelDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> ArcaneInstinctEffectsTable = FeatEffectSeedData.ArcaneInstinctEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.ArcaneInstinctDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> EnduringResilienceEffectsTable = FeatEffectSeedData.EnduringResilienceEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.EnduringResilienceDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> MoltenSurgeEffectsTable = FeatEffectSeedData.MoltenSurgeEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.MoltenSurgeDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> UnyieldingFormEffectsTable = FeatEffectSeedData.UnyieldingFormEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.UnyieldingFormDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> EssenceOverflowEffectsTable = FeatEffectSeedData.EssenceOverflowEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.EssenceOverflowDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> RadiantPulseEffectsTable = FeatEffectSeedData.RadiantPulseEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.RadiantPulseDefinition.Id, FeatEffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionFeatEffect> VeilOfDuskEffectsTable = FeatEffectSeedData.VeilOfDuskEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = FeatDefinitionSeedData.VeilOfDuskDefinition.Id, FeatEffectId = e.Id }).ToList();

    public static readonly List<FeatDefinitionFeatEffect> AllTables = SharpshooterTable.Concat(ToughTable)
                                                                        .Concat(PhilosopherInsightTable)
                                                                        .Concat(TravelersResilienceEffectsTable)
                                                                        .Concat(HoldTheLineEffectsTable)
                                                                        .Concat(IronStaminaEffectsTable)
                                                                        .Concat(FocusChannelEffectsTable)
                                                                        .Concat(ArcaneInstinctEffectsTable)
                                                                        .Concat(EnduringResilienceEffectsTable)
                                                                        .Concat(MoltenSurgeEffectsTable)
                                                                        .Concat(UnyieldingFormEffectsTable)
                                                                        .Concat(EssenceOverflowEffectsTable)
                                                                        .Concat(RadiantPulseEffectsTable)
                                                                        .Concat(VeilOfDuskEffectsTable).ToList();
}