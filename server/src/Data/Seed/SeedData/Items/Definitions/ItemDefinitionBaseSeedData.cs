using DMToolkit.API.Models.DMToolkitModels.Items.Bases;
using DMToolkit.API.Models.DMToolkitModels.Items.Definitions;
using SharedModels.Enums;

namespace DMToolkit.API.Data.Seed.SeedData.Items.Definitions;

public static class ItemDefinitionBaseSeedData
{
    public static readonly ItemDefinition TravelersSatchel = new()
    {
        Name = "Traveler's Satchel",
        Description = "Holds rations, maps, and other essentials for long journeys.",
        Weight = 5,
        Gp = 15
    };

    public static readonly ItemDefinition FlintAndTinder = new()
    {
        Name = "Flint and Tinder",
        Description = "Essential for starting fires in the wilderness.",
        Weight = 1,
        Gp = 5
    };

    public static readonly ArmorDefinition WornLeatherJerkin = new()
    {
        Name = "Worn Leather Jerkin",
        Description = "Provides basic protection while remaining light and flexible for travel.",
        Weight = 5,
        ArmorCategory = ArmorCategory.Light,
        DexterityCap = 2,
        HasDexterityCap = true,
        Gp = 20
    };

    public static readonly WeaponDefinition TravelersShortSword = new()
    {
        Name = "Traveler's Short Sword",
        Description = "A versatile weapon, useful for both defense and small game hunting.",
        Weight = 2,
        NumberOfDice = 1,
        NumberOfSides = 6,
        DamageType = "Slashing",
        Gp = 10
    };

    public static readonly ItemDefinition QuillOfInsight = new()
    {
        Name = "Quill of Insight",
        Description = "A fine quill said to help one focus thoughts when writing or studying.",
        Weight = 1,
        Gp = 10
    };

    public static readonly ItemDefinition NotebookOfEndlessThoughts = new()
    {
        Name = "Notebook of Endless Thoughts",
        Description = "Leather-bound notebook filled with blank pages for jotting down ideas.",
        Weight = 2,
        Gp = 15
    };

    public static readonly ArmorDefinition ScholarsRobe = new()
    {
        Name = "Scholar's Robe",
        Description = "Simple robe with many pockets for notes and scrolls.",
        Weight = 3,
        ArmorCategory = ArmorCategory.Light,
        Gp = 20
    };

    public static readonly WeaponDefinition WoodenWalkingStaff = new()
    {
        Name = "Wooden Walking Staff",
        Description = "A plain staff used for walking or defending oneself if needed.",
        Weight = 4,
        NumberOfDice = 1,
        NumberOfSides = 4,
        DamageType = "Bludgeoning",
        Gp = 5
    };

    public static readonly ArmorDefinition ReinforcedChainVest = new()
    {
        Name = "Reinforced Chain Vest",
        Description = "Interlinked steel rings layered over padded leather. Reliable protection without excessive weight.",
        Weight = 25,
        ArmorCategory = ArmorCategory.Medium,
        DexterityCap = 2,
        HasDexterityCap = true,
        StrengthRequirement = 11,
        HasStealthDisadvantage = false,
        Don = "1 minute",
        Doff = "1 minute",
        Gp = 40
    };

    public static readonly WeaponDefinition SteelLongsword = new()
    {
        Name = "Steel Longsword",
        Description = "A well-balanced blade favored by disciplined soldiers.",
        Weight = 3,
        NumberOfDice = 1,
        NumberOfSides = 8,
        DamageType = "Slashing",
        Gp = 25
    };

    public static readonly ArmorDefinition IronBuckler = new()
    {
        Name = "Iron Buckler",
        Description = "A small round shield that can be strapped to the forearm, freeing the hand when needed.",
        Weight = 4,
        Gp = 10,
        ArmorCategory = ArmorCategory.Shield
    };

    public static readonly ArmorDefinition ThreadedAetherweaveRobe = new()
    {
        Name = "Threaded Aetherweave Robe",
        Description = "Silken robe reinforced with faintly luminescent thread. Offers minimal protection but aids focus.",
        Weight = 3,
        ArmorCategory = ArmorCategory.Light,
        Gp = 20
    };

    public static readonly WeaponDefinition AranceFocusStaff = new()
    {
        Name = "Arcane Focus Staff",
        Description = "A polished wooden staff carved with runes, used both as walking aid and conduit for magic.",
        Weight = 4,
        NumberOfDice = 1,
        NumberOfSides = 6,
        DamageType = "Bludgeoning",
        Gp = 25
    };

    public static readonly ItemDefinition ResearchersSatchel = new()
    {
        Name = "Researcher's Satchel",
        Description = "Contains ink, quills, parchment, and a few notes on magical formulae.",
        Weight = 5,
        Gp = 15
    };

    public static readonly List<ItemDefinitionBase> WayfarerSet = new() { TravelersSatchel, FlintAndTinder, WornLeatherJerkin, TravelersShortSword };
    public static readonly List<ItemDefinitionBase> PhilosopherSet = new() { QuillOfInsight, NotebookOfEndlessThoughts, ScholarsRobe, WoodenWalkingStaff };
    public static readonly List<ItemDefinitionBase> VanguardSet = new() { ReinforcedChainVest, IronBuckler, SteelLongsword };
    public static readonly List<ItemDefinitionBase> ArcanistSet = new() { ThreadedAetherweaveRobe, AranceFocusStaff, ResearchersSatchel };
    public static readonly List<ItemDefinitionBase> AllItemDefinitions = WayfarerSet.Concat(PhilosopherSet).Concat(VanguardSet).Concat(ArcanistSet).ToList();
}