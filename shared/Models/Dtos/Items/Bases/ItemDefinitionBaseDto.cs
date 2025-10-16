using System.Text.Json.Serialization;

namespace DMToolkit.Shared.Models.Dtos.Items.Bases;

// For future reference, creates a $type field equal to "Weapon"
// [JsonDerivedType(typeof(ItemInstanceDto), "Item")]
// [JsonDerivedType(typeof(WeaponInstanceDto), "Weapon")] 
// [JsonDerivedType(typeof(ArmorInstanceDto), "Armor")]
public abstract class ItemDefinitionBaseDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int Weight { get; set; } = 0;
    public string ItemType { get; set; } = "Item";
    public WorthDto Worth { get; set; } = new();
}