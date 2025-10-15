namespace DMToolkit.Shared.Models.Dtos.Entities;

public class EffectDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string? Title { get; set; } = null;
    public string? Description { get; set; } = null;
    public string DataType { get; set; } = string.Empty;
    public Dictionary<string, object> Data { get; set; } = new();
}