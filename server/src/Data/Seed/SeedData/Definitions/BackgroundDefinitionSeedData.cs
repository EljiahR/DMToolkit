using DMToolkit.Data.Seeders.SeedData;
using DMToolkit.Models.Definitions;

public static class BackgroundDefinitionSeedData
{
    public static readonly BackgroundDefinition PhilosopherDefinition = new()   
    {
        Name = "Philosopher",
        Description =    "Thinks and stuff",
        AbilityScoreDefinitions = new List<AbilityScoreDefinition> { AbilityScoreDefinitionSeedData.IntDefinition, AbilityScoreDefinitionSeedData.WisDefinition, AbilityScoreDefinitionSeedData.ChaDefinition },
        FeatDefinition = FeatDefinitionSeedData.PhilosopherInsightDefinition,
        SkillDefinitions = new List<SkillDefinition> { SkillDefinitionSeedData.ArcanaDefinition, SkillDefinitionSeedData.InsightDefinition }
    };
        
    public static readonly BackgroundDefinition WayfarerBackground = new()
    {
        Name = "Wayfarer",
        Description = "You are a seasoned traveler who has crossed strange lands, survived in the wilderness, and adapted to the hardships of life on the road.",
        AbilityScoreDefinitions = new List<AbilityScoreDefinition> { AbilityScoreDefinitionSeedData.StrDefinition, AbilityScoreDefinitionSeedData.ConDefinition, AbilityScoreDefinitionSeedData.WisDefinition },
        FeatDefinition = FeatDefinitionSeedData.TravelersResilienceDefinition,
        SkillDefinitions = new List<SkillDefinition> { SkillDefinitionSeedData.SurvivalDefinition, SkillDefinitionSeedData.PerceptionDefinition }
    };
}