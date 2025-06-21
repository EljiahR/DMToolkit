namespace DMTools.Seed;

public class Data
{
    public static Feature[] OriginFeatures = [
        new ParentFeature(
            "Alert",
            "Origin",
            [
                new ProficiencyFeature(
                    "Initiative Proficiency",
                    "When rolling for Initiative, ou can add your Proficiency Bonuys to the roll.",
                    "Origin",
                    "Initiative"
                ),
                new GameplayFeature(
                    "Initiative Swap",
                    "Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one willing ally in the same combat. You can't make this swap if you or the ally has the Incapacited condition.",
                    "Origin",
                    "Combat Order"
                )
            ]
        )
    ];
    public static Feature[] SpeciesFeatures = [
        new AdditiveFeature(
            "Resourceful",
            "You gain Herioc Inspiration whenever you finish a Long Rest",
            "Species",
            "Herioc Inspiration",
            1
        ),
        new ProficiencyFeature(
            "Skillful",
            "You gain proficiency in one skill of your choice.",
            "Species",
            "Skills"
        ),
        new FeatFeature(
            "Versatile",
            "You gain an Origin feat of your choice. Skilled is recommended.",
            "Origin",
            "Origin"
        )
            
    ];
    public static WeaponProperty[] WeaponProperties = [
        new("Thrown", "Weapon can be thrown without penalty", new(null, 20, 60)),
        new("Versatile", "Two handing increases damage", new(new(8)))
    ];
    public static WeaponMastery[] WeaponMasteries = [
        new("Sap", "Creatures hit have disadvantage on next attack roll"),
        new("Slow", "Creatures hit by this have their speed reduced by 10, does not stack")
    ];
    public static Weapon[] Weapons = [
        new(
            "Spear",
            3,
            new(0,0,0,1),
            DamageTypes.Piercing,
            new(6),
            [WeaponProperties[0], WeaponProperties[1]],
            WeaponMasteries[0]
        ),
        new(
            "Light Crossbow",
            5,
            new(0,0,0,25),
            DamageTypes.Piercing,
            new(8),
            [
                new("Ammunition", "Weapon is ranged only and requires ammunition to fire", new(null, 80, 320, "Bolt")),
                new("Loading", "Weapon cannot only be fired once per turn regardless of number of attacks, bonus actions, and reactions"),
                new("Two-Handed", "Weapon requires two hands to use")
            ],
            WeaponMasteries[1]
        )
    ];
    public static Ammunition[] Ammo = [new("Bolt", 20)];
    public static CoinPouch[] CoinPouchs = [new(0,0,0,50), new(0,0,0,12)];
    public static ITools[] Tools = [new ToolCategory("Gaming Set", [new("Dice", 0f, new(0,1)), new("Dragon Chess", 0f, new(0,0,0,1))])];
    public static CharacterClass[] Classes = [new("Fighter")];
    public static Subclass[] Subclasses = [new("Champion", Classes[0])];
    public static Background[] Backgrounds = [new Background("Guard", ["Strength", "Intelligence", "Wisdom"], OriginFeatures[0],  ["Athletics", "Perception"], Tools[0], [[Weapons[0], Weapons[1], Ammo[0], CoinPouchs[1]], [CoinPouchs[0]]], "Guard")];
    public static Species[] AllSpecies = [new("Human", "Humanoid", 30, ["Medium", "Small"], SpeciesFeatures.Take(3).ToArray())];
    public static Lineage[] AllLineages = [];
}