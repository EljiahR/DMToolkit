using DMToolkit.API.Models.DMToolkitModels.Definitions;

namespace DMToolkit.API.Models.DMToolkitModels.Instances;

public class CharacterClassInstance : IDefinitionInstance<CharacterClassDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public ICollection<FeatInstance> FeatInstances { get; set; } = new List<FeatInstance>();
    public string SubclassInstanceId { get; set; } = string.Empty; 
    public SubclassInstance? SubclassInstance { get; set; } = null;
    public string DefinitionId { get; set; } = string.Empty;
    public CharacterClassDefinition? Definition { get; set; } = null;
}