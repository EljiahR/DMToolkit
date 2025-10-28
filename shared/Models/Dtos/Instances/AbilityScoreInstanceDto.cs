namespace SharedModels.Models.Dtos.Instances;

public class AbilityScoreInstanceDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public int Score { get; set; } = 0;
    public bool IsProficient { get; set; } = false;
    public ICollection<SkillInstanceDto> SkillInstances { get; set; } = new List<SkillInstanceDto>();
    public string DefinitionId { get; set; } = string.Empty;
}