namespace SharedModels.Models.Dtos.Definitions;

public class ConditionDefinitionDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool IsDebuff { get; set; } = false;
    public string Duration { get; set;} = string.Empty;
    public ICollection<string> EffectIds { get; set; } = new List<string>();
}