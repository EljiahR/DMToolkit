namespace DMToolkit.Shared.Models.Dtos.Instances;

public class BackgroundInstanceDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public List<string> AbilityScores { get; set; } = new();
    public List<FeatInstanceDto> Features { get; set; } = new();
    public List<string> FeatureInstanceIds { get; set; } = new();
    public List<string> SkillProficiencies { get; set; } = new();
    public string DefinitionId { get; set; } = string.Empty;
}