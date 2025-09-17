using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Items.Bases;

public abstract class ItemBase : WorthBase
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int Weight { get; set; } = 0;
    public List<ItemCategoryItemBase> ItemCategoryItemBases { get; set; } = new();
}
