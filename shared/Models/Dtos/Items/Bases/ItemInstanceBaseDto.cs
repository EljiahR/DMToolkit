using System.Text.Json.Serialization;
using DMToolkit.Shared.Models.Dtos.Items.Instances;

namespace DMToolkit.Shared.Models.Dtos.Items.Bases;

// For future reference, creates a $type field equal to "Item"
[JsonDerivedType(typeof(ItemInstanceDto), "Item")]
[JsonDerivedType(typeof(WeaponInstanceDto), "Weapon")] 
[JsonDerivedType(typeof(ArmorInstanceDto), "Armor")]
public abstract class ItemInstanceBaseDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string ItemType { get; set; } = "Item";
    public int Quantity { get; set; } = 1;
    public bool IsEquipped { get; set; } = false;
    public string DefinitionId { get; set; } = string.Empty;
}