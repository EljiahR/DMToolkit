using DMToolkit.Models.JoinTables;

namespace DMToolkit.Data.Seeders.SeedData;

public static class CharacterClassDefinitionItemDefinitionBaseSeedData
{
    public static readonly List<CharacterClassDefinitionItemDefinitionBase> VanguardItemTables = ItemDefinitionBaseSeedData.VanguardSet.Select(item => new CharacterClassDefinitionItemDefinitionBase { CharacterClassDefinitionId = BackgroundDefinitionSeedData.WayfarerBackground.Id, ItemDefinitionBaseId = item.Id }).ToList();
    public static readonly List<CharacterClassDefinitionItemDefinitionBase> PhilosopherItemTables = ItemDefinitionBaseSeedData.PhilosopherSet.Select(item => new CharacterClassDefinitionItemDefinitionBase { CharacterClassDefinitionId = BackgroundDefinitionSeedData.PhilosopherDefinition.Id, ItemDefinitionBaseId = item.Id }).ToList();
    public static readonly List<CharacterClassDefinitionItemDefinitionBase> AllTables = VanguardItemTables.Concat(PhilosopherItemTables).ToList();
}