using DMToolkit.Models.Entities;

namespace DMToolkit.Data.Seeders.SeedData;

public static class FeatEffectSeedData
{
    // Effects
    public static readonly FeatEffect IgnoreCoverEffect = new()
    {
        Type = "AttackModifier",
        Title = "Ignore Cover",
        Description = "Your ranged attacks ignore up to three-quarters cover.",
        Data = new Dictionary<string, object>
        {
            { "IgnoreCoverLevels", 2 }
        }
    };

    public static readonly FeatEffect LongRangeAccuracyEffect = new()
    {
        Type = "AttackModifier",
        Title = "Long Range Accuracy",
        Description = "You suffer no disadvantage on ranged attacks made at long range.",
        Data = new Dictionary<string, object>
        {
            { "IgnoreDisadvantageAtRange", true }
        }
    };

    public static readonly FeatEffect PowerShotEffect = new()
    {
        Type = "DamageModifier",
        Title = "Power Shot",
        Description = "Before making a ranged attack, you can choose to take a -5 penalty to the roll. If it hits, add +10 damage.",
        Data = new Dictionary<string, object>
        {
            { "AttackPenalty", -5 },
            { "DamageBonus", 10 }
        }
    };

    public static readonly FeatEffect HpFlatBonusEffect = new()
    {
        Type = "HitPointModifier",
        Title = "Flat Bonus",
        Description = "Your maximum hit points increase by 2 for each level you have.",
        Data = new Dictionary<string, object>
        {
            { "BonusPerLevel", 2 }
        }
    };

    public static readonly FeatEffect InsightfulReasoningEffect = new()
    {
        Type = "SkillModifier",
        Title = "Insightful Reasoning",
        Description = "Gain a bonus to Insight checks as your study of people and ideas sharpens your perception.",
        Data = new Dictionary<string, object>
        {
            { "Skill", "Insight" },
            { "Bonus", 2 }
        }
    };

    public static readonly FeatEffect PersuasiveSpeakerEffect = new()
    {
        Type = "SkillModifier",
        Title = "Persuasive Speaker",
        Description = "Gain a bonus to Persuasion checks from your ability to frame arguments logically.",
        Data = new Dictionary<string, object>
        {
            { "Skill", "Persuasion" },
            { "Bonus", 2 }
        }
    };

    public static readonly FeatEffect ContemplativeRestEffect = new()
    {
        Type = "UtilityFeature",
        Title = "Contemplative Rest",
        Description = "When taking a short or long rest, you can spend 10 minutes in meditation to grant one ally advantage on their next saving throw within the next hour.",
        Data = new Dictionary<string, object>
        {
            { "RestTimeRequired", "10 minutes" },
            { "Effect", "GrantAllyAdvantageSavingThrow" },
            { "Duration", "1 hour" }
        }
    };

    public static readonly FeatEffect ResistExhaustionEffect = new()
    {
        Type = "ConditionResistance",
        Title = "Resist Exhaustion",
        Description = "You gain advantage on saving throws made to resist exhaustion from travel, hunger, or harsh environments.",
        Data = new Dictionary<string, object>
        {
            { "Condition", "Exhaustion" },
            { "Advantage", true }
        }
    };

    public static readonly FeatEffect SurvivalExpertiseEffect = new()
    {
        Type = "SkillModifier",
        Title = "Survival Expertise",
        Description = "Gain a bonus to Survival checks when foraging for food or navigating difficult terrain.",
        Data = new Dictionary<string, object>
        {
            { "Skill", "Survival" },
            { "Bonus", 2 }
        }
    };

    // Collections
    public static readonly List<FeatEffect> SharpshooterEffects = new() { IgnoreCoverEffect, LongRangeAccuracyEffect, PowerShotEffect };
    public static readonly List<FeatEffect> ToughEffects = new() { HpFlatBonusEffect };
    public static readonly List<FeatEffect> PhilosopherInsightEffects = new() { InsightfulReasoningEffect, PersuasiveSpeakerEffect, ContemplativeRestEffect };
    public static readonly List<FeatEffect> TravelersResilienceEffects = new() { ResistExhaustionEffect, SurvivalExpertiseEffect };
    public static readonly List<FeatEffect> AllEffects = new()
    {
        IgnoreCoverEffect,
        LongRangeAccuracyEffect,
        PowerShotEffect,
        HpFlatBonusEffect,
        InsightfulReasoningEffect,
        PersuasiveSpeakerEffect,
        ContemplativeRestEffect,
        ResistExhaustionEffect,
        SurvivalExpertiseEffect
    };
}
