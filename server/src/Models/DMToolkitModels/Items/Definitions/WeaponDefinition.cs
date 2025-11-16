using DMToolkit.API.Models.DMToolkitModels.Entities;
using DMToolkit.API.Models.DMToolkitModels.Items.Bases;

namespace DMToolkit.API.Models.DMToolkitModels.Items.Definitions;

public class WeaponDefinition : ItemDefinitionBase, IItemDefinition
{
    public int NumberOfDice { get; set; } = 0;
    public int NumberOfSides { get; set; } = 0;
    public string DamageType { get; set; } = string.Empty;
    public ICollection<Effect> WeaponProperties { get; set; } = new List<Effect>();
    public bool IsMartial { get;set; } = false;
    public string? WeaponMasteryId { get; set; } = null; 
    public Effect? WeaponMastery { get; set; } = null;

    public WeaponDefinition()
    {
        ItemType = "Weapon";
    }
}