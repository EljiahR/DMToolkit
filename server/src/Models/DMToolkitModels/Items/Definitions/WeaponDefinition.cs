using DMToolkit.Models.Entities;
using DMToolkit.Models.Items.Bases;

namespace DMToolkit.Models.Items.Definitions;

public class WeaponDefinition : ItemDefinitionBase, IItemDefinition
{
    public int NumberOfDice { get; set; } = 0;
    public int NumberOfSides { get; set; } = 0;
    public string DamageType { get; set; } = string.Empty;
    public ICollection<Effect> WeaponProperties { get; set; } = new List<Effect>();
    public string? WeaponMasteryId { get; set; } = null; 
    public Effect? WeaponMastery { get; set; } = null;

    public WeaponDefinition()
    {
        ItemType = "Weapon";
    }
}