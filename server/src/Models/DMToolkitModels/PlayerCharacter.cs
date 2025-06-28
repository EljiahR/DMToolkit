using DMToolkit.Models.Attributes.AbilityScores;
using DMToolkit.Models.BackgroundModels;
using DMToolkit.Models.ClassModels;
using DMToolkit.Models.Currency;
using DMToolkit.Models.Items.Equipment;
using DMToolkit.Models.Features;
using DMToolkit.Models.Items;
using DMToolkit.Models.SpeciesModels;
using DMToolkit.Models.Spells;

namespace DMToolkit.Models;

public class PlayerCharacter
{
    public int Id {get; set;}

    // Character Description
    public string Name {get; set;}
    public BackgroundInstance PlayerBackground {get; set;}
    public SpeciesInstance PlayerSpecies {get; set;}
    public List<ClassInstance> Classes {get; set;} = new();

    // Character Level and Experience
    public int TotalLevel {get => Classes.Sum(x => x.Level);}
    public int XP {get; set;} // optional for the most part

    // Character's Armor Class
    public int ArmorClass {get;} // will be updated to get AC from equiptment and other situations

    // Characters Health related issues
    public int MaxHitPoints {get;} // will be updated to get from con, feats, etc...
    public int CurrentHitPoints {get; set;}
    public int TemporaryHitPoints {get; set;} = 0;
    public int HitDice {get;set;}
    public int CurrentHitDice {get;set;}
    public int SuccessfulDeathSaves {get; set;} = 0;
    public int FailedDeathSaves {get; set;} = 0;

    // Ability Scores, Proficiency Bonus, and state of Herioc Inspiration
    public int ProficiencyBonus{get => (TotalLevel - 1) / 4 + 2;}
    public Strength PlayerStrength;
    public Dexterity PlayerDexterity;
    public Constitution PlayerConstitution;
    public Intelligence PlayerIntelligence;
    public Wisdom PlayerWisdom;
    public Charisma PlayerCharisma;
    public bool HasHeriocInspiration {get; set;} = false;

    // Equiptment Training and Weapon/Tool Proficiencies
    public Dictionary<ArmorType, bool> ArmorTraining {get;} = new(){
        {ArmorType.Light, false},
        {ArmorType.Medium, false},
        {ArmorType.Heavy, false},
        {ArmorType.Shield, false}
    };
    public List<Item> WeaponProficiencies {get;} = new();
    public List<Item> ToolProficiencies {get;} = new();

    // Physical Traits
    public int Initiative {get; set;} // Will definitely need updated
    public int Speed {get; set;}
    public string Size {get; set;}
    public int PassivePerception {get => 10 + PlayerWisdom.Skills.Where(x => x.SkillName == "Perception").First().GetModifier(ProficiencyBonus);} // Subject to change

    // Iventory, Equipped Weapons and Spells
    public List<Item> Inventory {get; set;} = new();
    public List<Spell> KnownSpells {get; set;} = new();
    public List<Spell> EquippedSpells {get; set;} = new();
    public Item? MainHand {get;set;}
    public Item? OffHand {get;set;}
    public Armor? EquippedArmor {get; set;}
    public Worth Wallet {get; set;} = new();
    public List<Item> EquippedMisc {get; set;} = new();
    // Features 
    private List<FeatureInstance> _playerFeats {get; set;} = new();
    public List<FeatureInstance> PlayerFeats {
        get => _playerFeats;
        set => _playerFeats = value; }
    
    // Characteristics
    public List<string> Languages {get; set;} = new();
     

    public PlayerCharacter(string name, BackgroundInstance background,
     SpeciesInstance species, int[] scores)
    {
        Name = name;
        PlayerBackground = background;
        PlayerSpecies = species;
        PlayerStrength = new Strength(scores[0]);
        PlayerDexterity = new Dexterity(scores[1]);
        PlayerConstitution = new Constitution(scores[2]);
        PlayerIntelligence = new Intelligence(scores[3]);
        PlayerWisdom = new Wisdom(scores[4]);
        PlayerCharisma = new Charisma(scores[5]);
        Size = species.Size;
    }
}