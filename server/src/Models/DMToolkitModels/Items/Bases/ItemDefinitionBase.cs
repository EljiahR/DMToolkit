namespace DMToolkit.API.Models.DMToolkitModels.Items.Bases;

public abstract class ItemDefinitionBase : WorthBase
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int Weight { get; set; } = 0;
    public string ItemType { get; set; } = "Item";
}
