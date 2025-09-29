using DMToolkit.Models.Instances;
using DMToolkit.Models.Items.Bases;

namespace DMToolkit.Models.JoinTables;

public class CharacterItemBase : IJoinTable
{
    public required string CharacterId { get; set; }
    public required Character Character { get; set; }
    public required string ItemBaseId { get; set; }
    public required ItemBase ItemBase { get; set; }
    public bool IsEquipped { get; set; } = false;
    public int Quantity { get; set; } = 1;
}