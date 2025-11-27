using DMToolkit.API.Models.DMToolkitModels.Definitions;

namespace DMToolkit.API.Models.DMToolkitModels.Instances;

public class CharacterClassInstance : IDefinitionInstance<CharacterClassDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public int Level { get; set; } = 0;
    public List<int> HpRolls { get; set; } = new();
    public ICollection<FeatInstance> FeatInstances { get; set; } = new List<FeatInstance>();
    public string SubclassInstanceId { get; set; } = string.Empty; 
    public SubclassInstance? SubclassInstance { get; set; } = null;
    public bool SelectedItemSet { get; set; } = false;
    public string DefinitionId { get; set; } = string.Empty;
    public CharacterClassDefinition? Definition { get; set; } = null;
}