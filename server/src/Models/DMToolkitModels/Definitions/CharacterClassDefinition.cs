using DMToolkit.API.Models.DMToolkitModels.Items.Bases;
using DMToolkit.API.Models.DMToolkitModels.Items.Definitions;
using DMToolkit.API.Models.DMToolkitModels.JoinTables;
using SharedModels.Enums;

namespace DMToolkit.API.Models.DMToolkitModels.Definitions;

public class CharacterClassDefinition : IDefinition
{
    // General
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    // Core Traits
    public string PrimaryAbilityScoreDefinitionId { get; set; } = string.Empty;
    public AbilityScoreDefinition? PrimaryAbilityScoreDefinition { get; set; } = null;
    public string AlternativePrimaryAbilityScoreDefinitionId { get; set; } = string.Empty;
    public AbilityScoreDefinition? AlternativePrimaryAbilityScoreDefinition { get; set; } = null;
    public bool PrimaryScoreIsExclusive { get; set; } = true;
    public int HitDie { get; set; } = 0;
    public ICollection<AbilityScoreDefinition> SavingThrowProficiencies { get; set; } = new List<AbilityScoreDefinition>();
    public ICollection<SkillDefinition> SkillProficiencies { get; set; } = new List<SkillDefinition>();
    public int NumberOfSkillProficiencies { get; set; } = 0;
    public ICollection<WeaponCategory> WeaponProficiencies { get; set; } = new List<WeaponCategory>();
    public ICollection<string> ExtraWeaponProficiencies { get; set; } = new List<string>();
    public string ToolProficiencyId { get; set; } = string.Empty;
    public ToolDefinition? ToolProficiency { get; set; } = null;
    public ICollection<ToolCategory> ToolProficiencyCategories { get; set; } = new List<ToolCategory>();
    public int NumberOfToolProficiencies { get; set; } = 0;
    public ICollection<ArmorCategory> ArmorProficiencies { get; set; } = new List<ArmorCategory>();
    public ICollection<CharacterClassDefinitionItemDefinitionBase> StartingEquipmentQuantityTables { get; set; } = new List<CharacterClassDefinitionItemDefinitionBase>();
    public int StartingGp { get; set; } = 0;
    // Features
    public ICollection<CharacterClassDefinitionFeatDefinition> CharacterClassDefinitionFeatDefinitions { get; set; } = new List<CharacterClassDefinitionFeatDefinition>();
    public ICollection<SubclassDefinition> SubclassDefinitions { get; set; } = new List<SubclassDefinition>();
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
    public AbilityScoreDefinition? SpellcastingAbility { get; set; } = null;
    public string SpellcastingFocusId { get; set; } = string.Empty;
    public ItemDefinitionBase? SpellcastingFocus { get; set; } = null;
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