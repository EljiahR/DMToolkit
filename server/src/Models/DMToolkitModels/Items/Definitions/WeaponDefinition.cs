using DMToolkit.Models.Items.Bases;

namespace DMToolkit.Models.Items.Definitions;

public class WeaponDefinition : ItemBase
{
    public int NumberOfDice { get; set; } = 0;
    public int NumberOfSides { get; set; } = 0;
    public string DamageType { get; set; } = string.Empty;
    // Properties
    // Mastery
}