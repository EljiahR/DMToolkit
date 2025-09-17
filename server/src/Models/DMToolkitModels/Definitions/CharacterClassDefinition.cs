using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Definitions;

public class CharacterClassDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int HitDie { get; set; } = 0;
    public int FixedHp { get; set; } = 0;
    public ICollection<SubclassDefinition> SubclassDefinitions { get; set; } = new List<SubclassDefinition>();
    public ICollection<FeatDefinitionCharacterClassDefinition> FeatDefinitionCharacterClassDefinitions { get; set; } = new List<FeatDefinitionCharacterClassDefinition>();
    public int DefaultStr { get; set; } = 0;
    public int DefaultDex { get; set; } = 0;
    public int DefaultCon { get; set; } = 0;
    public int DefaultInt { get; set; } = 0;
    public int DefaultWis { get; set; } = 0;
    public int DefaultCha { get; set; } = 0;
}