namespace DMToolkit.Shared.Models.Dtos;

public class BackgroundInstanceDto
{
    public string Id { get; set; } = Guid.NewGuid();
    public List<string> AbilityScores { get; set; } = new();
    public List<string> FeatureInstanceIds { get; set; } = new();
    public List<string> SkillProficiencies { get; set; } = new();
    public string BaseId { get; set; } = string.Empty();
}