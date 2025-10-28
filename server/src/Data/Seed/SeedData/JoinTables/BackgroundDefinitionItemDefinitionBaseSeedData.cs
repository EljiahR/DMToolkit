using DMToolkit.API.Data.Seed.SeedData.Definitions;
using DMToolkit.API.Data.Seed.SeedData.Items.Definitions;
using DMToolkit.API.Models.DMToolkitModels.JoinTables;

namespace DMToolkit.API.Data.Seed.SeedData.JoinTables;

public static class BackgroundDefinitionItemDefinitionBaseSeedData
{
    public static readonly List<BackgroundDefinitionItemDefinitionBase> WayfarerItemTables = ItemDefinitionBaseSeedData.WayfarerSet.Select(item => new BackgroundDefinitionItemDefinitionBase { BackgroundDefinitionId = BackgroundDefinitionSeedData.WayfarerBackground.Id, ItemDefinitionBaseId = item.Id }).ToList();
    public static readonly List<BackgroundDefinitionItemDefinitionBase> PhilosopherItemTables = ItemDefinitionBaseSeedData.PhilosopherSet.Select(item => new BackgroundDefinitionItemDefinitionBase { BackgroundDefinitionId = BackgroundDefinitionSeedData.PhilosopherDefinition.Id, ItemDefinitionBaseId = item.Id }).ToList();
    public static readonly List<BackgroundDefinitionItemDefinitionBase> AllTables = WayfarerItemTables.Concat(PhilosopherItemTables).ToList();
}