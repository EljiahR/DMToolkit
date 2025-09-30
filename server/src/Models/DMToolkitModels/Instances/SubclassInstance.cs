using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.Instances;

public class SubclassInstance : IDefinitionInstance<SubclassDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public ICollection<FeatInstance> FeatInstances { get; set; } = new List<FeatInstance>();
    public string DefinitionId { get; set; } = string.Empty;
    public SubclassDefinition? Definition { get; set; } = null;
    public string CharacterClassInstanceId { get; set; } = string.Empty;
    public CharacterClassInstance? CharacterClassInstance { get; set; } = null;
}