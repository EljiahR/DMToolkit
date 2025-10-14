using DMToolkit.Models.Items.Bases;
using DMToolkit.Models.Items.Entities;

namespace DMToolkit.Models.Items.Definitions;

public class WeaponDefinition : ItemDefinitionBase, IItemDefinition
{
    public int NumberOfDice { get; set; } = 0;
    public int NumberOfSides { get; set; } = 0;
    public string DamageType { get; set; } = string.Empty;
    public ICollection<WeaponProperty> WeaponProperties { get; set; } = new List<WeaponProperty>();
    public WeaponProperty? WeaponMastery { get; set; } = null;
    public string WeaponMasteryId { get; set; } = string.Empty;
}