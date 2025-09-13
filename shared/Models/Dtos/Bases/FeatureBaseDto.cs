namespace DMToolkit.Shared.Models.Dtos;

public class FeatureBaseDto
{
    public string Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty();
    public string Description { get; set; } = string.Empty();
    public List<List<string>> AvaibleEffectIds = new();
}