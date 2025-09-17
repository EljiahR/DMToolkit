using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Items.Entities;

public class ItemCategory
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public ICollection<ItemCategoryItemBase> ItemCategoryItemBases { get; set; } = new List<ItemCategoryItemBase>();
}