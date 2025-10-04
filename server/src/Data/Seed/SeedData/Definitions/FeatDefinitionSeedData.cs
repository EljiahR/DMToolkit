using DMToolkit.Models.Definitions;

namespace DMToolkit.Data.Seeders.SeedData;

public static class FeatDefinitionSeedData
{
    public static readonly FeatDefinition SharpshooterDefinition = new()
    {
        Name = "Sharpshooter",
        Description = "You excel at ranged weapon attacks, ignoring cover and striking with deadly precision.",
    };

    public static readonly FeatDefinition ToughDefinition = new()
    {
        Name = "Tough",
        Description = "You are unusually hardy, gaining additional health to endure hardships.",
    };

    public static readonly FeatDefinition PhilosopherInsightDefinition = new()
    {
        Name = "Philosopher's Insight",
        Description = "Your contemplative nature and sharp reasoning grant you clarity in thought and speech.",
    };

    public static readonly FeatDefinition TravelersResilienceDefinition = new()
    {
        Name = "Traveler's Resilience",
        Description = "Years of wandering have hardened you against fatigue and sharpened your survival instincts.",
    };

    public static readonly List<FeatDefinition> AllFeatDefinitions = new()
    {
        SharpshooterDefinition,
        ToughDefinition,
        PhilosopherInsightDefinition,
        TravelersResilienceDefinition
    };
}