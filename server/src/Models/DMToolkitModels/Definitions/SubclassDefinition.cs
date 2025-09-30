namespace DMToolkit.Models.Definitions;

public class SubclassDefinition : IDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<FeatDefinition> FeatDefinitions { get; set; } = new List<FeatDefinition>();
    public string CharacterClassDefinitionId { get; set; } = string.Empty;
    public CharacterClassDefinition? CharacterClassDefinition { get; set; } = null;
}
