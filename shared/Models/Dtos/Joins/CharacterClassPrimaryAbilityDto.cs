public class CharacterClassPrimaryAbilityDto
{
    public required string PrimaryAbilityScoreDefinitionId { get; set; }
    public string AlternativePrimaryAbilityScoreDefinitionId { get; set; } = string.Empty;
    public bool IsExclusive { get; set; } = true;
}