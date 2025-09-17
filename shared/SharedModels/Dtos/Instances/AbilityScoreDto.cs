namespace DMToolkit.Shared.Models.Dtos.Instances;

public class AbilityScoreDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Key { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public int Amount { get; set; } = 0;
    public bool Proficient { get; set; } = false;
    public List<SkillDto> Skills { get; set; } = new();
    public List<string> SkillIds { get; set; } = new();
}