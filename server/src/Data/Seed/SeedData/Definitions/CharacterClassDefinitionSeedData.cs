using DMToolkit.Models.Definitions;

namespace DMToolkit.Data.Seeders.SeedData;

public static class CharacterClassDefinitionSeedData
{
    public static readonly CharacterClassDefinition VanguardDefinition = new()
    {
        Name = "Vanguard",
        Description = "A disciplined warrior who leads from the front, anchoring the line and shielding allies from harm.",
        HitDie = 10,
        FixedHp = 10,
        DefaultStr = 14,
        DefaultDex = 10,
        DefaultCon = 14,
        DefaultInt = 10,
        DefaultWis = 12,
        DefaultCha = 8,
        FeatDefinitions = new List<FeatDefinition> { FeatDefinitionSeedData.HoldTheLineDefinition, FeatDefinitionSeedData.IronStaminaDefinition }
    };

    public static readonly CharacterClassDefinition ArcanistDefinition = new()
    {
        Name = "Arcanist",
        Description = "A scholar of the unknown who studies the nature of magic itself, bending it to their will through intellect and willpower rather than instinct.",
        HitDie = 6,
        FixedHp = 6,
        DefaultStr = 8,
        DefaultDex = 12,
        DefaultCon = 10,
        DefaultInt = 15,
        DefaultWis = 13,
        DefaultCha = 10,
        FeatDefinitions = new List<FeatDefinition> { FeatDefinitionSeedData.FocusChannelDefinition, FeatDefinitionSeedData.ArcaneInstinctDefinition }
    };

    public static readonly List<CharacterClassDefinition> AllCharacterClasses = new() { VanguardDefinition, ArcanistDefinition };
}