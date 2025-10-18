using DMToolkit.Models.Entities;

namespace DMToolkit.Data.Seeders.SeedData;

public static class EffectSeedData
{
    // Effects
    public static readonly Effect IgnoreCoverEffect = new()
    {
        Title = "Ignore Cover",
        Description = "Your ranged attacks ignore up to three-quarters cover.",
        Data = new Dictionary<string, object>
        {
            { "IgnoreCoverLevels", 2 }
        }
    };

    public static readonly Effect LongRangeAccuracyEffect = new()
    {
        Title = "Long Range Accuracy",
        Description = "You suffer no disadvantage on ranged attacks made at long range.",
        Data = new Dictionary<string, object>
        {
            { "IgnoreDisadvantageAtRange", true }
        }
    };

    public static readonly Effect PowerShotEffect = new()
    {
        Title = "Power Shot",
        Description = "Before making a ranged attack, you can choose to take a -5 penalty to the roll. If it hits, add +10 damage.",
        Data = new Dictionary<string, object>
        {
            { "AttackPenalty", -5 },
            { "DamageBonus", 10 }
        }
    };

    public static readonly Effect HpFlatBonusEffect = new()
    {
        Title = "Flat Bonus",
        Description = "Your maximum hit points increase by 2 for each level you have.",
        Data = new Dictionary<string, object>
        {
            { "BonusPerLevel", 2 }
        }
    };

    public static readonly Effect InsightfulReasoningEffect = new()
    {
        Title = "Insightful Reasoning",
        Description = "Gain a bonus to Insight checks as your study of people and ideas sharpens your perception.",
        Data = new Dictionary<string, object>
        {
            { "Skill", "Insight" },
            { "Bonus", 2 }
        }
    };

    public static readonly Effect PersuasiveSpeakerEffect = new()
    {
        Title = "Persuasive Speaker",
        Description = "Gain a bonus to Persuasion checks from your ability to frame arguments logically.",
        Data = new Dictionary<string, object>
        {
            { "Skill", "Persuasion" },
            { "Bonus", 2 }
        }
    };

    public static readonly Effect ContemplativeRestEffect = new()
    {
        Title = "Contemplative Rest",
        Description = "When taking a short or long rest, you can spend 10 minutes in meditation to grant one ally advantage on their next saving throw within the next hour.",
        Data = new Dictionary<string, object>
        {
            { "RestTimeRequired", "10 minutes" },
            { "Effect", "GrantAllyAdvantageSavingThrow" },
            { "Duration", "1 hour" }
        }
    };

    public static readonly Effect ResistExhaustionEffect = new()
    {
        Title = "Resist Exhaustion",
        Description = "You gain advantage on saving throws made to resist exhaustion from travel, hunger, or harsh environments.",
        Data = new Dictionary<string, object>
        {
            { "Condition", "Exhaustion" },
            { "Advantage", true }
        }
    };

    public static readonly Effect SurvivalExpertiseEffect = new()
    {
		Title = "Survival Expertise",
        Description = "Gain a bonus to Survival checks when foraging for food or navigating difficult terrain.",
        Data = new Dictionary<string, object>
        {
            { "Skill", "Survival" },
            { "Bonus", 2 }
        }
    };

    public static readonly Effect StopTheAdvanceEffect = new()
    {
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
    public static readonly Effect GuardiansResolveEffect = new()
    {
		Title = "Guardian’s Resolve",
        Description = "Gain a +1 bonus to AC while you are within 5 feet of at least one ally.",
        Data = new()
            {
                { "Condition", "AllyNearby" },
                { "ACBonus", 1 }
            }
    };

    public static readonly Effect ResistFatigueEffect = new()
    {
		Title = "Resist Fatigue",
        Description = "Gain advantage on saving throws against exhaustion or effects that cause fatigue.",
        Data = new()
        {
            { "Condition", "Exhaustion" },
            { "Advantage", true }
        }
    };
    public static readonly Effect EnduringFortitudeEffect = new()
    {
		Title = "Enduring Fortitude",
        Description = "Increase your maximum hit points by 1 per character level.",
        Data = new()
        {
            { "PerLevel", 1 },
            { "AppliesTo", "MaxHP" }
        }
    };

    public static readonly Effect DisciplinedFocusEffect = new()
    {
		Title = "Disciplined Focus",
        Description = "Gain advantage on concentration checks to maintain magical effects.",
        Data = new()
        {
            { "CheckType", "Concentration" },
            { "Advantage", true }
        }
    };

    public static readonly Effect EfficientCastingEffect = new()
    {
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

    public static readonly Effect SenseMagicEffect = new()
    {
		Title = "Sense Magic",
        Description = "You automatically detect the presence of active magical effects within 15 feet.",
        Data = new()
        {
            { "DetectionType", "Magic" },
            { "Range", 15 }
        }
};
    public static readonly Effect PreparedMindEffect = new()
    {
		Title = "Prepared Mind",
        Description = "Gain a +1 bonus to initiative rolls.",
        Data = new()
        {
            { "Bonus", 1 }
        }
    };

    public static readonly Effect StoneSkinEffect = new()
    {
		Title = "Stone Skin",
        Description = "Gain resistance to bludgeoning damage from nonmagical sources.",
        Data = new Dictionary<string, object>
        {
            { "DamageType", "Bludgeoning" },
            { "ResistanceValue", 0.5 }
        }
    };

    public static readonly Effect EarthenFocusEffect = new()
    {
		Title = "Earthen Focus",
        Description = "You have advantage on Constitution saving throws made to resist exhaustion.",
        Data = new Dictionary<string, object>
        {
            { "Ability", "Constitution" },
            { "Condition", "Exhaustion" },
            { "Bonus", "Advantage" }
        }
    };

    public static readonly Effect MoltenEmpowermentEffect = new()
    {
		Title = "Molten Empowerment",
        Description = "When reduced below half health, gain +2 Strength until the end of your next turn.",
        Data = new Dictionary<string, object>
        {
            { "Trigger", "BelowHalfHP" },
            { "Stat", "Strength" },
            { "Bonus", 2 },
            { "Duration", "1Turn" }
        }
    };

    public static readonly Effect HardenedFleshEffect = new()
    {
		Title = "Hardened Flesh",
        Description = "Reduce incoming physical damage by 1 while not wearing heavy armor.",
        Data = new Dictionary<string, object>
        {
            { "DamageReduction", 1 },
            { "Condition", "LightOrNoArmor" }
        }
    };

    public static readonly Effect AethericSurgeEffect = new()
    {
		Title = "Aetheric Surge",
        Description = "Once per rest, reroll a spell attack or damage roll and take the higher result.",
        Data = new Dictionary<string, object>
        {
            { "Uses", 1 },
            { "Recharge", "ShortRest" }
        }
    };

    public static readonly Effect RadiantPulseEffect = new()
    {
		Title = "Radiant Pulse",
        Description = "Emit a burst of radiant light that heals allies or burns enemies within 10 feet.",
        Data = new Dictionary<string, object>
        {
            { "Radius", 10 },
            { "HealAmount", 4 },
            { "DamageAmount", 4 },
            { "DamageType", "Radiant" }
        }
    };

    public static readonly Effect ShadowVeilEffect = new()
    {
		Title = "Shadow Veil",
        Description = "Gain advantage on Stealth checks for 1 minute and resistance to radiant damage.",
        Data = new Dictionary<string, object>
        {
            { "Duration", "1Minute" },
            { "Bonus", "Advantage" },
            { "DamageResistance", "Radiant" }
        }
    };

    // Collections
    public static readonly List<Effect> SharpshooterEffects = new() { IgnoreCoverEffect, LongRangeAccuracyEffect, PowerShotEffect };
    public static readonly List<Effect> ToughEffects = new() { HpFlatBonusEffect };
    public static readonly List<Effect> PhilosopherInsightEffects = new() { InsightfulReasoningEffect, PersuasiveSpeakerEffect, ContemplativeRestEffect };
    public static readonly List<Effect> TravelersResilienceEffects = new() { ResistExhaustionEffect, SurvivalExpertiseEffect };
    public static readonly List<Effect> HoldTheLineEffects = new() { StopTheAdvanceEffect, GuardiansResolveEffect };
    public static readonly List<Effect> IronStaminaEffects = new() { ResistFatigueEffect, EnduringFortitudeEffect };
    public static readonly List<Effect> FocusChannelEffects = new() { DisciplinedFocusEffect, EfficientCastingEffect };
    public static readonly List<Effect> ArcaneInstinctEffects = new() { SenseMagicEffect, PreparedMindEffect };
    public static readonly List<Effect> EnduringResilienceEffects = new() { StoneSkinEffect, EarthenFocusEffect };
    public static readonly List<Effect> MoltenSurgeEffects = new() { MoltenEmpowermentEffect };
    public static readonly List<Effect> UnyieldingFormEffects = new() { HardenedFleshEffect };
    public static readonly List<Effect> EssenceOverflowEffects = new() { AethericSurgeEffect };
    public static readonly List<Effect> RadiantPulseEffects = new() { RadiantPulseEffect };
    public static readonly List<Effect> VeilOfDuskEffects = new() { ShadowVeilEffect };

    public static readonly List<Effect> AllEffects = new()
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
        PreparedMindEffect,
        StoneSkinEffect,
        EarthenFocusEffect,
        MoltenEmpowermentEffect,
        HardenedFleshEffect,
        AethericSurgeEffect,
        RadiantPulseEffect,
        ShadowVeilEffect
    };
}
