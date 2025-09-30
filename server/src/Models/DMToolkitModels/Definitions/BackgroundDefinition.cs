namespace DMToolkit.Models.Definitions;

public class BackgroundDefinition : IDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<AbilityScoreDefinition> AbilityScoreDefinitions { get; set; } = new List<AbilityScoreDefinition>();
    public string FeatDefinitionId { get; set; } = string.Empty;
    public FeatDefinition? FeatDefinition { get; set; } = null;
    public string SkillOne { get; set; } = string.Empty;
    public string SkillTwo { get; set; } = string.Empty; 
}