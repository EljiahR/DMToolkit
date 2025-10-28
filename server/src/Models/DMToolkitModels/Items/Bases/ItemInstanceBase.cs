using DMToolkit.API.Models.DMToolkitModels.Instances;

namespace DMToolkit.API.Models.DMToolkitModels.Items.Bases;

public abstract class ItemInstanceBase
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string ItemType { get; set; } = "Item";
    public int Quantity { get; set; } = 1;
    public bool IsEquipped { get; set; } = false;
    public string DefinitionId { get; set; } = string.Empty;
    public ItemDefinitionBase? Definition { get; set; } = null;
    public string CharacterId { get; set; } = string.Empty;
    public Character? Character { get; set; } = null;
}