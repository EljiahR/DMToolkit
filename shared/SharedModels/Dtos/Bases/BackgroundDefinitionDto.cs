namespace DMToolkit.Shared.Models.Dtos.Definitions;

public class BackgroundDefinitionDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<string> AbilityScores { get; set; } = new();
    public List<string> FeatureIds { get; set; } = new();
    public List<string> SkillIds { get; set; } = new();
}