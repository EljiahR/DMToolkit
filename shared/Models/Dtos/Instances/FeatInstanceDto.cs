namespace SharedModels.Models.Dtos.Instances;

public class FeatInstanceDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public List<string> EffectIds { get; set; } = new();
    public string DefinitionId { get; set; } = string.Empty;   
}