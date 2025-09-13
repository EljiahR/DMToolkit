namespace DMToolkit.Models.Bases;

public class SubclassBase
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<string> FeatBaseIds { get; set; } = new();
    public string CharacterClassBaseId { get; set; } = string.Empty;
}
