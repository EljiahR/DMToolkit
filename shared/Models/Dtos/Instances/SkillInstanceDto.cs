namespace SharedModels.Models.Dtos.Instances;

public class SkillInstanceDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public bool IsProficient { get; set; } = false;
    public string DefinitionId { get; set; } = string.Empty;
}