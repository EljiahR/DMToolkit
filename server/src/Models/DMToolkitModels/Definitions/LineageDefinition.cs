namespace DMToolkit.Models.Definitions;

public class LineageDefinition : IDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<FeatDefinition> FeatDefinitions { get; set; } = new List<FeatDefinition>();
    public string SpeciesDefinitionId { get; set; } = string.Empty;
    public SpeciesDefinition? SpeciesDefinition { get; set; } = null;
}
