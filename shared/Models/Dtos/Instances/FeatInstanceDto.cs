namespace DMToolkit.Shared.Models.Dtos.Instances;

public class FeatInstanceDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public List<string> FeatEffectIds { get; set; } = new();
    public string DefinitionId { get; set; } = string.Empty;   
}