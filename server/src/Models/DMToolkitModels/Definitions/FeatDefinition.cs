using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Definitions;

public class FeatDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<FeatDefinitionFeatEffect> FeatDefinitionFeatEffects { get; set; } = new();
    public List<FeatDefinitionCharacterClassDefinition> FeatDefinitionCharacterClassDefinitions { get; set; } = new();
    public List<FeatDefinitionLineageDefinition> FeatDefinitionLineageDefinitions { get; set; } = new();
    public List<FeatDefinitionSpeciesDefinition> FeatDefinitionSpeciesDefinitions { get; set; } = new();
    public List<FeatDefinitionSubclassDefinition> FeatDefinitionSubclassDefinitions { get; set; } = new();
}