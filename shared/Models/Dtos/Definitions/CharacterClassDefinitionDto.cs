using SharedModels.Models.Dtos.Joins;

namespace SharedModels.Models.Dtos.Definitions;

public class CharacterClassDefinitionDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int HitDie { get; set; } = 0;
    public int FixedHp { get; set; } = 0;
    public ICollection<SubclassDefinitionDto> SubclassDefinitions { get; set; } = new List<SubclassDefinitionDto>();
    public ICollection<FeatGroupLevelDto> FeatTables { get; set; } = new List<FeatGroupLevelDto>();
    public ICollection<ItemDefinitionBaseQuantity> ItemDefinitionBaseQuantities { get; set; } = new List<ItemDefinitionBaseQuantity>();
    public int StartingGp { get; set; } = 0;
    public int DefaultStr { get; set; } = 0;
    public int DefaultDex { get; set; } = 0;
    public int DefaultCon { get; set; } = 0;
    public int DefaultInt { get; set; } = 0;
    public int DefaultWis { get; set; } = 0;
    public int DefaultCha { get; set; } = 0;
}