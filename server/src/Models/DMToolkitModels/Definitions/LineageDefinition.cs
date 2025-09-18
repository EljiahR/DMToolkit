using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Definitions;

public class LineageDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<FeatDefinitionLineageDefinition> FeatDefinitionLineageDefinitions { get; set; } = new List<FeatDefinitionLineageDefinition>();
    public string SpeciesDefinitionId { get; set; } = string.Empty;
    public SpeciesDefinition? SpeciesDefinition { get; set; } = null;
}
