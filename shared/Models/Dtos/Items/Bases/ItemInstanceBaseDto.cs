using System.Text.Json.Serialization;
using DMToolkit.Shared.Models.Dtos.Items.Instances;

namespace DMToolkit.Shared.Models.Dtos.Items.Bases;

[JsonDerivedType(typeof(WeaponInstanceDto), "Weapon")] // For future reference, creates a $type field equal to "Weapon"
public abstract class ItemInstanceBaseDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string ItemType { get; set; } = "Weapon";
    public int Quantity { get; set; } = 1;
    public bool IsEquipped { get; set; } = false;
    public string DefinitionId { get; set; } = string.Empty;
}