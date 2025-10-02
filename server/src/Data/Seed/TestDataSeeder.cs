using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;
using DMToolkit.Models.JoinTables;

namespace DMToolkit.Data.Seeders;

public static class TestDataSeeder
{
    public static async Task SeedAsync(DMDbContext context)
    {
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

        var philosopherInsightDefinition = new FeatDefinition
        {
            Name = "Philosopher's Insight",
            Description = "Your contemplative nature and sharp reasoning grant you clarity in thought and speech.",
        };

        var travelersResilienceDefinition = new FeatDefinition
        {
            Name = "Traveler's Resilience",
            Description = "Years of wandering have hardened you against fatigue and sharpened your survival instincts.",
        };

        // FeatDefinitionFeatEffects

        var sharpshooterTable = sharpshooterEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = sharpshooterDefinition.Id, FeatEffectId = e.Id });
        var toughTable = toughEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = toughDefinition.Id, FeatEffectId = e.Id });
        var philosopherInsightTable = philosopherInsightEffects.Select(e => new FeatDefinitionFeatEffect { FeatDefinitionId = philosopherInsightDefinition.Id, FeatEffectId = e.Id });

        // Background definitions

        var philosopherDefinition = new BackgroundDefinition
        {
            Name = "Philosopher",
            Description = "Thinks and stuff",
            AbilityScoreDefinitions = new List<AbilityScoreDefinition> { intDefinition, wisDefinition, chaDefinition },
            FeatDefinition = philosopherInsightDefinition,
            SkillDefinitions = new List<SkillDefinition> { arcanaDefinition, insightDefinition }
        };
        
        var wayfarerBackground = new BackgroundDefinition
        {
            Name = "Wayfarer",
            Description = "You are a seasoned traveler who has crossed strange lands, survived in the wilderness, and adapted to the hardships of life on the road.",
            AbilityScoreDefinitions = new List<AbilityScoreDefinition> { strDefinition, conDefinition, wisDefinition },
            FeatDefinition = travelersResilienceDefinition,
            SkillDefinitions = new List<SkillDefinition> { survivalDefinition, perceptionDefinition }
        };
    }
}