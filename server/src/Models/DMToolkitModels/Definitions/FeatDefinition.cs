using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Definitions;

public class FeatDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<FeatDefinitionFeatEffect> FeatDefinitionFeatEffects { get; set; } = new List<FeatDefinitionFeatEffect>();
    public ICollection<FeatDefinitionCharacterClassDefinition> FeatDefinitionCharacterClassDefinitions { get; set; } = new List<FeatDefinitionCharacterClassDefinition>();
    public ICollection<FeatDefinitionLineageDefinition> FeatDefinitionLineageDefinitions { get; set; } = new List<FeatDefinitionLineageDefinition>();
    public ICollection<FeatDefinitionSpeciesDefinition> FeatDefinitionSpeciesDefinitions { get; set; } = new List<FeatDefinitionSpeciesDefinition>();
    public ICollection<FeatDefinitionSubclassDefinition> FeatDefinitionSubclassDefinitions { get; set; } = new List<FeatDefinitionSubclassDefinition>();
    public ICollection<BackgroundDefinition> BackgroundDefinitions { get; set; } = new List<BackgroundDefinition>();
}