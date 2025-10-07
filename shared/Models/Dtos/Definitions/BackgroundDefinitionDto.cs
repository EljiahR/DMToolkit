namespace DMToolkit.Shared.Models.Dtos.Definitions;

public class BackgroundDefinitionDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<string> AbilityScoreIds { get; set; } = new List<string>();
    public string FeatDefinitionId { get; set; } = string.Empty;
    public ICollection<string> SkillDefinitionIds { get; set; } = new List<string>(); 
}