using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Definitions;

public class FeatDefinition : IDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<FeatDefinitionFeatEffect> FeatDefinitionFeatEffects { get; set; } = new List<FeatDefinitionFeatEffect>();
    public ICollection<CharacterClassDefinition> CharacterClassDefinitions { get; set; } = new List<CharacterClassDefinition>();
    public ICollection<LineageDefinition> LineageDefinitions { get; set; } = new List<LineageDefinition>();
    public ICollection<SpeciesDefinition> SpeciesDefinitions { get; set; } = new List<SpeciesDefinition>();
    public ICollection<SubclassDefinition> SubclassDefinitions { get; set; } = new List<SubclassDefinition>();
    public ICollection<BackgroundDefinition> BackgroundDefinitions { get; set; } = new List<BackgroundDefinition>();
}