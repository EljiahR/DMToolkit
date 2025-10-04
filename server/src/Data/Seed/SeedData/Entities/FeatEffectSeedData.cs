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

    public static readonly FeatEffect StopTheAdvanceEffect = new()
    {
        Type = "ReactionTrigger",
        Title = "Stop the Advance",
        Description = "When an enemy moves within 5 feet of you, you may use your reaction to reduce their movement speed by half until the end of their turn.",
        Data = new()
        {
            { "Trigger", "EnemyMovementWithinRange" },
            { "Range", 5 },
            { "Effect", "ReduceSpeed" },
            { "Value", 0.5 }
        }
    };
    public static readonly FeatEffect GuardiansResolveEffect = new()
    {
        Type = "DefenseModifier",
        Title = "Guardian’s Resolve",
        Description = "Gain a +1 bonus to AC while you are within 5 feet of at least one ally.",
        Data = new()
            {
                { "Condition", "AllyNearby" },
                { "ACBonus", 1 }
            }
    };

    public static readonly FeatEffect ResistFatigueEffect = new()
    {
        Type = "ConditionResistance",
        Title = "Resist Fatigue",
        Description = "Gain advantage on saving throws against exhaustion or effects that cause fatigue.",
        Data = new()
        {
            { "Condition", "Exhaustion" },
            { "Advantage", true }
        }
    };
    public static readonly FeatEffect EnduringFortitudeEffect = new()
    {
        Type = "HealthBonus",
        Title = "Enduring Fortitude",
        Description = "Increase your maximum hit points by 1 per character level.",
        Data = new()
        {
            { "PerLevel", 1 },
            { "AppliesTo", "MaxHP" }
        }
    };

    public static readonly FeatEffect DisciplinedFocusEffect = new()
    {
        Type = "ConcentrationBonus",
        Title = "Disciplined Focus",
        Description = "Gain advantage on concentration checks to maintain magical effects.",
        Data = new()
        {
            { "CheckType", "Concentration" },
            { "Advantage", true }
        }
    };

    public static readonly FeatEffect EfficientCastingEffect = new()
    {
        Type = "ResourceModifier",
        Title = "Efficient Casting",
        Description = "Once per long rest, you may reduce the cost of one spell or ability by 1 point (mana, focus, or equivalent).",
        Data = new()
        {
            { "ResourceType", "Mana" },
            { "Reduction", 1 },
            { "Uses", 1 },
            { "RestType", "Long" }
        }
    };

    public static readonly FeatEffect SenseMagicEffect = new()
    {
        Type = "DetectionBonus",
        Title = "Sense Magic",
        Description = "You automatically detect the presence of active magical effects within 15 feet.",
        Data = new()
        {
            { "DetectionType", "Magic" },
            { "Range", 15 }
        }
};
    public static readonly FeatEffect PreparedMindEffect = new()
    {
        Type = "InitiativeModifier",
        Title = "Prepared Mind",
        Description = "Gain a +1 bonus to initiative rolls.",
        Data = new()
        {
            { "Bonus", 1 }
        }
    };

    // Collections
    public static readonly List<FeatEffect> SharpshooterEffects = new() { IgnoreCoverEffect, LongRangeAccuracyEffect, PowerShotEffect };
    public static readonly List<FeatEffect> ToughEffects = new() { HpFlatBonusEffect };
    public static readonly List<FeatEffect> PhilosopherInsightEffects = new() { InsightfulReasoningEffect, PersuasiveSpeakerEffect, ContemplativeRestEffect };
    public static readonly List<FeatEffect> TravelersResilienceEffects = new() { ResistExhaustionEffect, SurvivalExpertiseEffect };
    public static readonly List<FeatEffect> HoldTheLineEffects = new() { StopTheAdvanceEffect, GuardiansResolveEffect };
    public static readonly List<FeatEffect> IronStaminaEffects = new() { ResistFatigueEffect, EnduringFortitudeEffect };
    public static readonly List<FeatEffect> FocusChannelEffects = new() { DisciplinedFocusEffect, EfficientCastingEffect };
    public static readonly List<FeatEffect> ArcaneInstinctEffects = new() { SenseMagicEffect, PreparedMindEffect };
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
        SurvivalExpertiseEffect,
        StopTheAdvanceEffect,
        GuardiansResolveEffect,
        ResistFatigueEffect,
        EnduringFortitudeEffect,
        DisciplinedFocusEffect,
        EfficientCastingEffect,
        SenseMagicEffect,
        PreparedMindEffect
    };
}
