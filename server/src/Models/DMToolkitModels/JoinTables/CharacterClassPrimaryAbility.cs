using DMToolkit.API.Models.DMToolkitModels.Definitions;

namespace DMToolkit.API.Models.DMToolkitModels.JoinTables;

public class CharacterClassPrimaryAbility
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string PrimaryAbilityScoreDefinitionId { get; set; }
    public AbilityScoreDefinition PrimaryAbilityScoreDefinition { get; set; } = null!;
    public string AlternativePrimaryAbilityScoreDefinitionId { get; set; } = string.Empty;
    public AbilityScoreDefinition? AlternativePrimaryAbilityScoreDefinition { get; set; } = null;
    public bool IsExclusive { get; set; } = true;
}