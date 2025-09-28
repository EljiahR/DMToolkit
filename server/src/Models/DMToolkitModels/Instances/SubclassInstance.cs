using DMToolkit.Models.Definitions;
using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Instances;

public class SubclassInstance : IDefinitionInstance<SubclassDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public ICollection<FeatInstanceSubclassInstance> FeatInstanceSubclassInstances { get; set; } = new List<FeatInstanceSubclassInstance>();
    public string DefinitionId { get; set; } = string.Empty;
    public SubclassDefinition? Definition { get; set; } = null;
    public string CharacterClassInstanceId { get; set; } = string.Empty;
    public CharacterClassInstance? CharacterClassInstance { get; set; } = null;
}