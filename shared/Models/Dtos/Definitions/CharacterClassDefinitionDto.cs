using SharedModels.Enums;
using SharedModels.Models.Dtos.Joins;

namespace SharedModels.Models.Dtos.Definitions;

public class CharacterClassDefinitionDto
{
    // General
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    // Core Traits
    public string PrimaryAbilityId { get; set; } = string.Empty;
    public int HitDie { get; set; } = 0;
    public ICollection<string> SavingThrowProficiencyIds { get; set; } = new List<string>();
    public ICollection<string> SkillProficiencyIds { get; set; } = new List<string>();
    public int NumberOfSkillProficiencies { get; set; } = 0;
    public ICollection<WeaponCategory> WeaponProficiencies { get; set; } = new List<WeaponCategory>();
    public ICollection<string>? ExtraWeaponProficiencies { get; set; } = null;
    public string ToolProficiencyId { get; set; } = string.Empty;
    public ICollection<ToolCategory>? ToolProficiencyCategories { get; set; } = null;
    public int NumberOfToolProficiencies { get; set; } = 0;
    public ICollection<ArmorCategory>? ArmorProficiencies { get; set; } = null;
    public ICollection<ItemDefinitionBaseQuantity> StartingEquipmentQuantityTables { get; set; } = new List<ItemDefinitionBaseQuantity>();
    public int StartingGp { get; set; } = 0;
    // Features
    public ICollection<FeatGroupLevelDto> FeatTables { get; set; } = new List<FeatGroupLevelDto>();
    public ICollection<SubclassDefinitionDto> SubclassDefinitions { get; set; } = new List<SubclassDefinitionDto>();
    // Spellcasting
    public int[]? NumberOfPreparedSpells { get; set; } = null;
    public int[]? NumberOfCantrips { get; set; } = null;
    public int[]? LevelOneSlots { get; set; } = null;
    public int[]? LevelTwoSlots { get; set; } = null;
    public int[]? LevelThreeSlots { get; set; } = null;
    public int[]? LevelFourSlots { get; set; } = null;
    public int[]? LevelFiveSlots { get; set; } = null;
    public int[]? LevelSixSlots { get; set; } = null;
    public int[]? LevelSevenSlots { get; set; } = null;
    public int[]? LevelEightSlots { get; set; } = null;
    public int[]? LevelNineSlots { get; set; } = null;
    public string SpellcastingAbilityId { get; set; } = string.Empty;
    public string SpellcastingFocusId { get; set; } = string.Empty;
    public bool HasSpellbook { get; set; } = false;
    // Class Extras
    public int[]? ClassPoints { get; set;} = null; 
    public int[]? ClassDieNumber { get; set; } = null; 
    public int[]? ClassDieSides { get; set; } = null;
    public int[]? WeaponMasteries { get; set; } = null; 
    public int[]? ClassBonus { get; set; } = null;
    // Defaults
    public int DefaultStr { get; set; } = 0;
    public int DefaultDex { get; set; } = 0;
    public int DefaultCon { get; set; } = 0;
    public int DefaultInt { get; set; } = 0;
    public int DefaultWis { get; set; } = 0;
    public int DefaultCha { get; set; } = 0;
    public int FixedHp { get; set; } = 0;
}