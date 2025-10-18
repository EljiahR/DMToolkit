using DMToolkit.Shared.Models.Enums;

namespace DMToolkit.Shared.Models.Dtos.Entities;

public class EffectDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string? Title { get; set; } = null;
    public string? Description { get; set; } = null;
    public OriginType OriginType { get; set; } = OriginType.Other;
    public DataType DataType { get; set; } = DataType.Other;
    public Dictionary<string, object> Data { get; set; } = new();
}