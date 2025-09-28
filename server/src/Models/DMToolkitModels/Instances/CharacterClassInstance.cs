using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.Instances;

public class CharacterClassInstance : IDefinitionInstance<CharacterClassDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string DefinitionId { get; set; } = string.Empty;
    public CharacterClassDefinition? Definition { get; set; } = null;
}