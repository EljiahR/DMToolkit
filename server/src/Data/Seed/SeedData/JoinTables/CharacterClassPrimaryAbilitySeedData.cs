using DMToolkit.API.Data.Seed.SeedData.Definitions;
using DMToolkit.API.Models.DMToolkitModels.JoinTables;

public static class CharacterClassPrimaryAbilitySeedData
{
    public static readonly CharacterClassPrimaryAbility VanguardPrimaryAbility = new()
    {
        PrimaryAbilityScoreDefinitionId = AbilityScoreDefinitionSeedData.StrDefinition.Id
    };

    public static readonly CharacterClassPrimaryAbility ArcanistPrimaryAbility = new()
    {
        PrimaryAbilityScoreDefinitionId = AbilityScoreDefinitionSeedData.IntDefinition.Id
    };

    public static readonly List<CharacterClassPrimaryAbility> AllTables = new() { VanguardPrimaryAbility, ArcanistPrimaryAbility };
}