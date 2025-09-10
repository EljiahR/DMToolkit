namespace DMToolkit.Shared.Models.Dtos;

public class FeatureDto
{
    public string Id { get; set; } = Guid.NewGuid();
    public List<string> EffectIds { get; set; } = new();
    public string BaseId { get; set; } = string.Empty();   
}