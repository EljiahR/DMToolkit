namespace DMToolkit.Shared.Models.Dtos;

public class SkillDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public bool Proficient { get; set; } = false;
}