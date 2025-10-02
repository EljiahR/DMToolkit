using DMToolkit.Models.Definitions;

namespace DMToolkit.Data.Seeders.SeedData;

public static class AbilityScoreDefinitionSeedData
{
    public static readonly AbilityScoreDefinition StrDefinition = new()
    {
        Name = "Strength",
        Description = "Lift BIG",
        Abbreviation = "str",
        SkillDefinitions = new List<SkillDefinition> { SkillDefinitionSeedData.AthleticsDefinition }
    };

    public static readonly AbilityScoreDefinition DexDefinition = new()
    {
        Name = "Dexterity",
        Description = "Dodge BIG",
        Abbreviation = "dex",
        SkillDefinitions = new List<SkillDefinition> { SkillDefinitionSeedData.AcrobaticsDefinition }
    };

    public static readonly AbilityScoreDefinition ConDefinition = new()
    {
        Name = "Constitution",
        Description = "Take BIG damage",
        Abbreviation = "con"
    };

    public static readonly AbilityScoreDefinition IntDefinition = new()
    {
        Name = "Intelligence",
        Description = "Read BIG",
        Abbreviation = "int",
        SkillDefinitions = new List<SkillDefinition> { SkillDefinitionSeedData.ArcanaDefinition }
    };

    public static readonly AbilityScoreDefinition WisDefinition = new()
    {
        Name = "Wisdom",
        Description = "Think BIG",
        Abbreviation = "wis",
        SkillDefinitions = new List<SkillDefinition> { SkillDefinitionSeedData.InsightDefinition, SkillDefinitionSeedData.PerceptionDefinition, SkillDefinitionSeedData.SurvivalDefinition }
    };

    public static readonly AbilityScoreDefinition ChaDefinition = new()
    {
        Name = "Charisma",
        Description = "Talk BIG",
        Abbreviation = "cha",
        SkillDefinitions = new List<SkillDefinition> { SkillDefinitionSeedData.DeceptionDefinition }
    };
}