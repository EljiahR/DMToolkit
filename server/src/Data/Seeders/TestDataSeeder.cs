using DMToolkit.Models.Definitions;

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
    }
}