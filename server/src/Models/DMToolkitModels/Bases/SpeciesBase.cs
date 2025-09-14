namespace DMToolkit.Models.Bases;

public class SpeciesBase
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public int Speed { get; set; } = 0;
    public string Size { get; set; } = string.Empty;
    public List<string> FeatBaseIds { get; set; } = new();
    public List<LineageBase> LineageBases = new();
}