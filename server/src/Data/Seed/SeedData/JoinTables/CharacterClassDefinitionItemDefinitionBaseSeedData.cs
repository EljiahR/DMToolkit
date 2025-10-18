using DMToolkit.Models.JoinTables;

namespace DMToolkit.Data.Seeders.SeedData;

public static class CharacterClassDefinitionItemDefinitionBaseSeedData
{
    public static readonly List<CharacterClassDefinitionItemDefinitionBase> VanguardItemTables = ItemDefinitionBaseSeedData.VanguardSet.Select(item => new CharacterClassDefinitionItemDefinitionBase { CharacterClassDefinitionId = CharacterClassDefinitionSeedData.VanguardDefinition.Id, ItemDefinitionBaseId = item.Id }).ToList();
    public static readonly List<CharacterClassDefinitionItemDefinitionBase> ArcanistItemTables = ItemDefinitionBaseSeedData.ArcanistSet.Select(item => new CharacterClassDefinitionItemDefinitionBase { CharacterClassDefinitionId = CharacterClassDefinitionSeedData.ArcanistDefinition.Id, ItemDefinitionBaseId = item.Id }).ToList();
    public static readonly List<CharacterClassDefinitionItemDefinitionBase> AllTables = VanguardItemTables.Concat(ArcanistItemTables).ToList();
}