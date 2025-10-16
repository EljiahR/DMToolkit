using System.Text.Json.Serialization;
using DMToolkit.Shared.Models.Dtos.Items.Definitions;

namespace DMToolkit.Shared.Models.Dtos.Items.Bases;

// For future reference, creates a $type field equal to "Item"
[JsonDerivedType(typeof(ItemDefinitionDto), "Item")]
[JsonDerivedType(typeof(WeaponDefinitionDto), "Weapon")] 
[JsonDerivedType(typeof(ArmorDefinitionDto), "Armor")]
public abstract class ItemDefinitionBaseDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int Weight { get; set; } = 0;
    public string ItemType { get; set; } = "Item";
    public WorthDto Worth { get; set; } = new();
}