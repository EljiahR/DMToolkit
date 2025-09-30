namespace DMToolkit.Models.Definitions;

public class SpeciesDefinition : IDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public int Speed { get; set; } = 0;
    public string Size { get; set; } = string.Empty;
    public ICollection<FeatDefinition> FeatDefinitions { get; set; } = new List<FeatDefinition>();
    public ICollection<LineageDefinition> LineageDefinitions = new List<LineageDefinition>();
}