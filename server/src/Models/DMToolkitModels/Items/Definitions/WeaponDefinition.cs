using DMToolkit.Models.Items.Bases;
using DMToolkit.Models.Items.Entities;
using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Items.Definitions;

public class WeaponDefinition : ItemBase
{
    public int NumberOfDice { get; set; } = 0;
    public int NumberOfSides { get; set; } = 0;
    public string DamageType { get; set; } = string.Empty;
    public ICollection<WeaponDefinitionWeaponProperty> WeaponDefinitionWeaponProperties { get; set; } = new List<WeaponDefinitionWeaponProperty>();
    public WeaponProperty? WeaponMastery { get; set; } = null;
    public string WeaponMasteryId { get; set; } = string.Empty;
}