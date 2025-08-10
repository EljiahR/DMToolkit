namespace DMToolkit.Shared.Models.Dtos;

public class FeatEffectDto
{
    public string Id { get; set; } = Guid.NewGuid();
    public string Type { get; set; } = string.Empty();
    public Dictionary<string, object> Data = new Dictionary<string, object>();
}