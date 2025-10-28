using DMToolkit.API.Models.DMToolkitModels.JoinTables;

namespace DMToolkit.API.Models.DMToolkitModels.Definitions;

public class CharacterClassDefinition : IDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int HitDie { get; set; } = 0;
    public int FixedHp { get; set; } = 0;
    public ICollection<SubclassDefinition> SubclassDefinitions { get; set; } = new List<SubclassDefinition>();
    public ICollection<CharacterClassDefinitionFeatDefinition> CharacterClassDefinitionFeatDefinitions { get; set; } = new List<CharacterClassDefinitionFeatDefinition>();
    public ICollection<CharacterClassDefinitionItemDefinitionBase> CharacterClassDefinitionItemDefinitionBases { get; set; } = new List<CharacterClassDefinitionItemDefinitionBase>();
    public int StartingGp { get; set; } = 0;
    public int DefaultStr { get; set; } = 0;
    public int DefaultDex { get; set; } = 0;
    public int DefaultCon { get; set; } = 0;
    public int DefaultInt { get; set; } = 0;
    public int DefaultWis { get; set; } = 0;
    public int DefaultCha { get; set; } = 0;
}