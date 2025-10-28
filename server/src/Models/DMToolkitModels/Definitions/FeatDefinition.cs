using DMToolkit.API.Models.DMToolkitModels.JoinTables;

namespace DMToolkit.API.Models.DMToolkitModels.Definitions;

public class FeatDefinition : IDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<FeatDefinitionEffect> FeatDefinitionEffects { get; set; } = new List<FeatDefinitionEffect>();
    public ICollection<CharacterClassDefinitionFeatDefinition> CharacterClassDefinitionFeatDefinitions { get; set; } = new List<CharacterClassDefinitionFeatDefinition>();
    public ICollection<LineageDefinition> LineageDefinitions { get; set; } = new List<LineageDefinition>();
    public ICollection<SpeciesDefinition> SpeciesDefinitions { get; set; } = new List<SpeciesDefinition>();
    public ICollection<SubclassDefinition> SubclassDefinitions { get; set; } = new List<SubclassDefinition>();
    public ICollection<BackgroundDefinition> BackgroundDefinitions { get; set; } = new List<BackgroundDefinition>();
}