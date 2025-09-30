using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;
using DMToolkit.Models.JoinTables;

namespace DMToolkit.Data.Seeders;

public static class TestDataSeeder
{
    public static async Task SeedAsync(DMDbContext context)
    {
        // Skill Definitions
        var athleticsDefinition = new SkillDefinition
        {
            Name = "Athletics",
            Description = "Ability to do athletic stuff, idk"
        };

        var acrobaticsDefinition = new SkillDefinition
        {
            Name = "Acrobatics",
            Description = "Ability to like flip and stuff"
        };

        var arcanaDefinition = new SkillDefinition
        {
            Name = "Arcana",
            Description = "Read runes and stuff"
        };

        var insightDefinition = new SkillDefinition
        {
            Name = "Insight",
            Description = "Ability to hindsight in real time"
        };

        var deceptionDefinition = new SkillDefinition
        {
            Name = "Deception",
            Description = "Ability to more than meets the eye"
        };

        // AbilityScoreDefinitions
        var strDefinition = new AbilityScoreDefinition
        {
            Name = "Strength",
            Description = "Lift BIG",
            Abbreviation = "str",
            SkillDefinitions = new List<SkillDefinition> { athleticsDefinition }
        };

        var dexDefinition = new AbilityScoreDefinition
        {
            Name = "Dexterity",
            Description = "Dodge BIG",
            Abbreviation = "dex",
            SkillDefinitions = new List<SkillDefinition> { acrobaticsDefinition }
        };

        var conDefinition = new AbilityScoreDefinition
        {
            Name = "Constitution",
            Description = "Take BIG damage",
            Abbreviation = "con"
        };

        var intDefinition = new AbilityScoreDefinition
        {
            Name = "Intelligence",
            Description = "Read BIG",
            Abbreviation = "int",
            SkillDefinitions = new List<SkillDefinition> { arcanaDefinition }
        };

        var wisDefinition = new AbilityScoreDefinition
        {
            Name = "Wisdom",
            Description = "Think BIG",
            Abbreviation = "wis",
            SkillDefinitions = new List<SkillDefinition> { insightDefinition }
        };

        var chaDefinition = new AbilityScoreDefinition
        {
            Name = "Charisma",
            Description = "Talk BIG",
            Abbreviation = "cha",
            SkillDefinitions = new List<SkillDefinition> { deceptionDefinition }
        };

        context.AddRange(strDefinition, dexDefinition, conDefinition, intDefinition, wisDefinition, chaDefinition);
        await context.SaveChangesAsync();

        // Feat effects
        var sharpshooterEffects = new List<FeatEffect>
        {
            new FeatEffect
            {
                Type = "AttackModifier",
                Title = "Ignore Cover",
                Description = "Your ranged attacks ignore up to three-quarters cover.",
                Data = new Dictionary<string, object>
                {
                    { "IgnoreCoverLevels", 2 }
                }
            },
            new FeatEffect
            {
                Type = "AttackModifier",
                Title = "Long Range Accuracy",
                Description = "You suffer no disadvantage on ranged attacks made at long range.",
                Data = new Dictionary<string, object>
                {
                    { "IgnoreDisadvantageAtRange", true }
                }
            },
            new FeatEffect
            {
                Type = "DamageModifier",
                Title = "Power Shot",
                Description = "Before making a ranged attack, you can choose to take a -5 penalty to the roll. If it hits, add +10 damage.",
                Data = new Dictionary<string, object>
                {
                    { "AttackPenalty", -5 },
                    { "DamageBonus", 10 }
                }
            }
        };

        var toughEffects = new List<FeatEffect>
        {
            new FeatEffect
            {
                Type = "HitPointModifier",
                Title = "Flat Bonus",
                Description = "Your maximum hit points increase by 2 for each level you have.",
                Data = new Dictionary<string, object>
                {
                    { "BonusPerLevel", 2 }
                }
            }
        };


        // Feat definitions
        var sharpshooterDefinition = new FeatDefinition
        {
            Name = "Sharpshooter",
            Description = "You excel at ranged weapon attacks, ignoring cover and striking with deadly precision.",
        };

        var toughDefinition = new FeatDefinition
        {
            Name = "Tough",
            Description = "You are unusually hardy, gaining additional health to endure hardships.",
        };

        // FeatDefinitionFeatEffects
        {
            var sharpshooterTable = sharpshooterEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = sharpshooterDefinition.Id, FeatEffectId = e.Id }); 
        }

        // Background definitions

        var philosopherDefinition = new BackgroundDefinition
        {
            Name = "Philosopher",
            Description = "Thinks and stuff",
            AbilityScoreOptionOne = "int",
            AbilityScoreOptionTwo = "wis",
            AbilityScoreOptionThree = "cha",
        };
    }
}