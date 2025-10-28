using DMToolkit.API.Models.DMToolkitModels.Definitions;

namespace DMToolkit.API.Data.Seed.SeedData.Definitions;

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

    public static readonly FeatDefinition HoldTheLineDefinition = new()
    {
        Name = "Hold the Line",
        Description = "You excel at halting enemy advances and protecting allies who fight beside you.",
    };

    public static readonly FeatDefinition IronStaminaDefinition = new()
    {
        Name = "Iron Stamina",
        Description = "Your training has made you tireless and steadfast, shrugging off fatigue and pain.",
    };

    public static readonly FeatDefinition FocusChannelDefinition = new()
    {
        Name = "Focus Channel",
        Description = "You maintain precision over your power through intense concentration.",
    };

    public static readonly FeatDefinition ArcaneInstinctDefinition = new()
    {
        Name = "Arcane Instinct",
        Description = "Your intuition allows you to sense fluctuations in magical energy before others can perceive them.",
    };

    public static readonly FeatDefinition EnduringResilienceDefinition = new()
    {
        Name = "Enduring Resilience",
        Description = "The Stoneborn’s connection to the earth grants them incredible fortitude in the face of harm.",
    };

    public static readonly FeatDefinition MoltenSurgeDefinition = new()
    {
        Name = "Molten Surge",
        Description = "Your veins thrum with latent volcanic energy that erupts in moments of desperation, amplifying your physical might temporarily.",
    };

    public static readonly FeatDefinition UnyieldingFormDefinition = new()
    {
        Name = "Unyielding Form",
        Description = "When focused, your body becomes nearly impervious, resisting damage with supernatural toughness.",
    };

    public static readonly FeatDefinition EssenceOverflowDefinition = new()
    {
        Name = "Essence Overflow",
        Description = "Your unstable form leaks raw magic, allowing you to enhance your spells or abilities in unpredictable but powerful ways.",
    };

    public static readonly FeatDefinition RadiantPulseDefinition = new()
    {
        Name = "Radiant Pulse",
        Description = "You can channel your inner light into a burst of healing or searing brilliance.",
    };

    public static readonly FeatDefinition VeilOfDuskDefinition = new()
    {
        Name = "Veil of Dusk",
        Description = "You shroud yourself in shadow, becoming harder to detect and briefly resistant to harm.",
    };

    public static readonly List<FeatDefinition> AllFeatDefinitions = new()
    {
        SharpshooterDefinition,
        ToughDefinition,
        PhilosopherInsightDefinition,
        TravelersResilienceDefinition,
        HoldTheLineDefinition,
        IronStaminaDefinition,
        FocusChannelDefinition,
        ArcaneInstinctDefinition,
        EnduringResilienceDefinition,
        MoltenSurgeDefinition,
        UnyieldingFormDefinition,
        EssenceOverflowDefinition,
        RadiantPulseDefinition,
        VeilOfDuskDefinition,
    };
}