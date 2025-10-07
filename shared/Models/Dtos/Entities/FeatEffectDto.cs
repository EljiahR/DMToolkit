namespace DMToolkit.Shared.Models.Dtos.Entities;

public class FeatEffectDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Type { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public Dictionary<string, object> Data = new();
}