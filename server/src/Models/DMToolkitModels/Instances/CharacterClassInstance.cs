using DMToolkit.Models.Definitions;
using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Instances;

public class CharacterClassInstance : IDefinitionInstance<CharacterClassDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public int Level { get; set; } = 0;
    public ICollection<FeatInstanceCharacterClassInstance> FeatInstanceCharacterClassInstances { get; set; } = new List<FeatInstanceCharacterClassInstance>();
    public string SubclassInstanceId { get; set; } = string.Empty; 
    public SubclassInstance? SubclassInstance { get; set; } = null;
    public string DefinitionId { get; set; } = string.Empty;
    public CharacterClassDefinition? Definition { get; set; } = null;
}