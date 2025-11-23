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
    public string PrimaryAbilityScoreDefinitionId { get; set; } = string.Empty;
    public string AlternativePrimaryAbilityScoreDefinitionId { get; set; } = string.Empty;
    public bool PrimaryScoreIsExclusive { get; set; } = true;
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
    public List<int> NumberOfPreparedSpells { get; set; } = new();
    public List<int> NumberOfCantrips { get; set; } = new();
    public List<int> LevelOneSlots { get; set; } = new();
    public List<int> LevelTwoSlots { get; set; } = new();
    public List<int> LevelThreeSlots { get; set; } = new();
    public List<int> LevelFourSlots { get; set; } = new();
    public List<int> LevelFiveSlots { get; set; } = new();
    public List<int> LevelSixSlots { get; set; } = new();
    public List<int> LevelSevenSlots { get; set; } = new();
    public List<int> LevelEightSlots { get; set; } = new();
    public List<int> LevelNineSlots { get; set; } = new();
    public string SpellcastingAbilityId { get; set; } = string.Empty;
    public string SpellcastingFocusId { get; set; } = string.Empty;
    public bool HasSpellbook { get; set; } = false;
    // Class Extras
    public List<int> ClassPoints { get; set;} = new(); 
    public List<int> ClassDieNumber { get; set; } = new(); 
    public List<int> ClassDieSides { get; set; } = new();
    public List<int> WeaponMasteries { get; set; } = new();
    public List<int> ClassBonus { get; set; } = new();
    // Defaults
    public int DefaultStr { get; set; } = 0;
    public int DefaultDex { get; set; } = 0;
    public int DefaultCon { get; set; } = 0;
    public int DefaultInt { get; set; } = 0;
    public int DefaultWis { get; set; } = 0;
    public int DefaultCha { get; set; } = 0;
    public int FixedHp { get; set; } = 0;
}