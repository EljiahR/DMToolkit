namespace DMToolkit.Shared.Models.Dtos.Entities;

public class SpellEffectDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string? Subtitle { get; set; }
    public string Type { get; set; } = string.Empty;
    public Dictionary<string, object> Data { get; set; } = new();
}