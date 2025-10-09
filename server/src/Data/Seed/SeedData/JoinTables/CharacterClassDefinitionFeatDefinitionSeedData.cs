using DMToolkit.Models.JoinTables;

namespace DMToolkit.Data.Seeders.SeedData;

public static class CharacterClassDefinitionFeatDefinitionSeedData
{
    public static readonly List<CharacterClassDefinitionFeatDefinition> VanguardFeatTables = new()
    {
        new()
        {
            CharacterClassDefinitionId = CharacterClassDefinitionSeedData.VanguardDefinition.Id,
            FeatDefinitionId = FeatDefinitionSeedData.HoldTheLineDefinition.Id,
            Level = 1
        },
        new()
        {
            CharacterClassDefinitionId = CharacterClassDefinitionSeedData.VanguardDefinition.Id,
            FeatDefinitionId = FeatDefinitionSeedData.IronStaminaDefinition.Id,
            Level = 1
        }
    };

    public static readonly List<CharacterClassDefinitionFeatDefinition> ArcanistFeatTables = new()
    {
        new()
        {
            CharacterClassDefinitionId = CharacterClassDefinitionSeedData.ArcanistDefinition.Id,
            FeatDefinitionId = FeatDefinitionSeedData.FocusChannelDefinition.Id,
            Level = 1
        },
        new()
        {
            CharacterClassDefinitionId = CharacterClassDefinitionSeedData.ArcanistDefinition.Id,
            FeatDefinitionId = FeatDefinitionSeedData.ArcaneInstinctDefinition.Id,
            Level = 1
        }
    };
}