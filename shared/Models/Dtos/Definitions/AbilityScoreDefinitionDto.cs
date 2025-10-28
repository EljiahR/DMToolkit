namespace SharedModels.Models.Dtos.Definitions;

public class AbilityScoreDefinitionDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Abbreviation { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<SkillDefinitionDto> SkillDefinitions { get; set; } = new List<SkillDefinitionDto>();
}