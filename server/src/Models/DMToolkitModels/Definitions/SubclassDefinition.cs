using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Definitions;

public class SubclassDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<FeatDefinitionSubclassDefinition> FeatDefinitionSubclassDefinitions { get; set; } = new List<FeatDefinitionSubclassDefinition>();
    public string CharacterClassDefinitionId { get; set; } = string.Empty;
    public CharacterClassDefinition? CharacterClassDefinition { get; set; } = null;
}
