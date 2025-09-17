namespace DMToolkit.Models.Entities;

public class FeatEffect
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Type { get; set; } = string.Empty;
    public Dictionary<string, object> Data = new();
}