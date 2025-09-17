using DMToolkit.Models.Items.Bases;
using DMToolkit.Models.Items.Entities;

namespace DMToolkit.Models.JoinTables;

public class ItemCategoryItemBase
{
    public required string ItemCategoryId { get; set; }
    public required ItemCategory ItemCategory { get; set; }
    public required string ItemBaseId { get; set; }
    public required ItemBase ItemBase { get; set; }
}