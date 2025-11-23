using DMToolkit.API.Models.DMToolkitModels.Definitions;
using SharedModels.Enums;

namespace DMToolkit.API.Data.Seed.SeedData.Definitions;

public static class CharacterClassDefinitionSeedData
{
    public static readonly CharacterClassDefinition VanguardDefinition = new()
    {
        Name = "Vanguard",
        Description = "A disciplined warrior who leads from the front, anchoring the line and shielding allies from harm.",
        PrimaryAbilityId = CharacterClassPrimaryAbilitySeedData.VanguardPrimaryAbility.Id,
        HitDie = 10,
        SavingThrowProficiencies = { AbilityScoreDefinitionSeedData.StrDefinition, AbilityScoreDefinitionSeedData.ConDefinition },
        SkillProficiencies =  { SkillDefinitionSeedData.AthleticsDefinition, SkillDefinitionSeedData.SurvivalDefinition },
        NumberOfSkillProficiencies = 2, // Assuming they choose 2 skills.
        WeaponProficiencies = new List<WeaponCategory> { WeaponCategory.Simple, WeaponCategory.Martial },
        ToolProficiency = null,
        NumberOfToolProficiencies = 0,
        ArmorProficiencies = new List<ArmorCategory> { ArmorCategory.Medium, ArmorCategory.Heavy, ArmorCategory.Shield},
        StartingGp = 75,
        ClassPoints = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3],
        ClassDieNumber = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ClassDieSides = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        WeaponMasteries = [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4], 
        DefaultStr = 16, DefaultDex = 10, DefaultCon = 14, DefaultInt = 8, DefaultWis = 10, DefaultCha = 8, 
        FixedHp = 10
    };

    public static readonly CharacterClassDefinition ArcanistDefinition = new()
    {
        Name = "Arcanist",
        Description = "A scholar of the unknown who studies the nature of magic itself, bending it to their will through intellect and willpower rather than instinct.",
        PrimaryAbilityId = CharacterClassPrimaryAbilitySeedData.ArcanistPrimaryAbility.Id, // Intelligence is the primary ability for an Arcanist.
        HitDie = 6, 
        SavingThrowProficiencies = { AbilityScoreDefinitionSeedData.IntDefinition, AbilityScoreDefinitionSeedData.DexDefinition },
        SkillProficiencies = {},
        NumberOfSkillProficiencies = 3,
        WeaponProficiencies = new List<WeaponCategory> { WeaponCategory.Simple },
        StartingGp = 60, 
        NumberOfPreparedSpells = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
        NumberOfCantrips = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // Cantrips are learned at level 1, and increase at certain levels.
        LevelOneSlots = [2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // Example spell slots for level 1.
        SpellcastingAbilityId = AbilityScoreDefinitionSeedData.IntDefinition.Id,
        HasSpellbook = true,
        DefaultStr = 8, DefaultDex = 12, DefaultCon = 10, DefaultInt = 15, DefaultWis = 13, DefaultCha = 10, 
        FixedHp = 6
    };

    public static readonly List<CharacterClassDefinition> AllCharacterClasses = new() { VanguardDefinition, ArcanistDefinition };
}