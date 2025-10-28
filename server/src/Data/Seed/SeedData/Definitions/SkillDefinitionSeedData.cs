using DMToolkit.API.Models.DMToolkitModels.Definitions;

namespace DMToolkit.API.Data.Seed.SeedData.Definitions;

public static class SkillDefinitionSeedData
{
    public static readonly SkillDefinition AcrobaticsDefinition = new()
    {
        Name = "Acrobatics",
        Description = "Ability to like flip and stuff"
    };

    public static readonly SkillDefinition ArcanaDefinition = new()
    {
        Name = "Arcana",
        Description = "Read runes and stuff"
    };

    public static readonly SkillDefinition AthleticsDefinition = new()
    {
        Name = "Athletics",
        Description = "Ability to do athletic stuff, idk"
    };

    public static readonly SkillDefinition DeceptionDefinition = new()
    {
        Name = "Deception",
        Description = "Ability to more than meets the eye"
    };

    public static readonly SkillDefinition InsightDefinition = new()
    {
        Name = "Insight",
        Description = "Ability to hindsight in real time"
    };

    public static readonly SkillDefinition PerceptionDefinition = new()
    {
        Name = "Perception",
        Description = "Ability to see"
    };

    public static readonly SkillDefinition SurvivalDefinition = new()
    {
        Name = "Survival",
        Description = "Ability to LIVE"
    };

    public static readonly SkillDefinition[] AllSkillDefinitions = {
        ArcanaDefinition,
        AthleticsDefinition,
        DeceptionDefinition,
        InsightDefinition,
        PerceptionDefinition,
        SurvivalDefinition
    };
}