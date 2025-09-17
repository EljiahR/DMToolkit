namespace DMToolkit.Models.Items.Entities;

public class WeaponProperty
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public Dictionary<string, object> Data = new();
}