using DMToolkit.Models.Items.Bases;
using DMToolkit.Models.Items.Definitions;
using DMToolkit.Shared.Models.Enums;

namespace DMToolkit.Data.Seeders.SeedData;

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

    public static readonly List<ItemDefinitionBase> WayfarerSet = new() { TravelersSatchel, FlintAndTinder, WornLeatherJerkin, TravelersShortSword };
    public static readonly List<ItemDefinitionBase> PhilosopherSet = new() { QuillOfInsight, NotebookOfEndlessThoughts, ScholarsRobe, WoodenWalkingStaff };
    public static readonly List<ItemDefinitionBase> AllItemDefinitions = WayfarerSet.Concat(PhilosopherSet).ToList();
}