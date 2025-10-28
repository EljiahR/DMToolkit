using DMToolkit.API.Data.Seed.SeedData.Definitions;
using DMToolkit.API.Data.Seed.SeedData.Entities;
using DMToolkit.API.Models.DMToolkitModels.JoinTables;

namespace DMToolkit.API.Data.Seed.SeedData.JoinTables;

public static class FeatDefinitionEffectSeedData
{
    public static readonly List<FeatDefinitionEffect> SharpshooterTable = EffectSeedData.SharpshooterEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.SharpshooterDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> ToughTable = EffectSeedData.ToughEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.ToughDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> PhilosopherInsightTable = EffectSeedData.PhilosopherInsightEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.PhilosopherInsightDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> TravelersResilienceEffectsTable = EffectSeedData.TravelersResilienceEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.TravelersResilienceDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> HoldTheLineEffectsTable = EffectSeedData.HoldTheLineEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.HoldTheLineDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> IronStaminaEffectsTable = EffectSeedData.IronStaminaEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.IronStaminaDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> FocusChannelEffectsTable = EffectSeedData.FocusChannelEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.FocusChannelDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> ArcaneInstinctEffectsTable = EffectSeedData.ArcaneInstinctEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.ArcaneInstinctDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> EnduringResilienceEffectsTable = EffectSeedData.EnduringResilienceEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.EnduringResilienceDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> MoltenSurgeEffectsTable = EffectSeedData.MoltenSurgeEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.MoltenSurgeDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> UnyieldingFormEffectsTable = EffectSeedData.UnyieldingFormEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.UnyieldingFormDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> EssenceOverflowEffectsTable = EffectSeedData.EssenceOverflowEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.EssenceOverflowDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> RadiantPulseEffectsTable = EffectSeedData.RadiantPulseEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.RadiantPulseDefinition.Id, EffectId = e.Id }).ToList();
    public static readonly List<FeatDefinitionEffect> VeilOfDuskEffectsTable = EffectSeedData.VeilOfDuskEffects.Select(e => new FeatDefinitionEffect { FeatDefinitionId = FeatDefinitionSeedData.VeilOfDuskDefinition.Id, EffectId = e.Id }).ToList();

    public static readonly List<FeatDefinitionEffect> AllTables = SharpshooterTable.Concat(ToughTable)
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