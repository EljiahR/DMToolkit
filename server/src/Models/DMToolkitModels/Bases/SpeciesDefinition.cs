using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Definitions;

public class SpeciesDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public int Speed { get; set; } = 0;
    public string Size { get; set; } = string.Empty;
    public List<FeatDefinitionSpeciesDefinition> FeatDefinitionSpeciesDefinitions { get; set; } = new();
    public List<LineageDefinition> LineageDefinitions = new();
}