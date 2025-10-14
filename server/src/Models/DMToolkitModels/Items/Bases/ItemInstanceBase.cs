namespace DMToolkit.Models.Items.Bases;

public abstract class ItemInstanceBase
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string ItemType { get; set; } = "Weapon";
    public string DefinitionId { get; set; } = string.Empty;
    public ItemDefinitionBase? Definition { get; set; } = null;
}