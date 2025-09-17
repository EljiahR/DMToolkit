namespace DMToolkit.Models.Definitions;

public class SkillDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string AbilityScoreDefinitionId { get; set; } = string.Empty;
    public AbilityScoreDefinition? AbilityScoreDefinition { get; set; } = null;
}