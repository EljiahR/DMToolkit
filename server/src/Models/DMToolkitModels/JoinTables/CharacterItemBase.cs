using DMToolkit.Models.Instances;
using DMToolkit.Models.Items.Bases;

namespace DMToolkit.Models.JoinTables;

public class CharacterItemBase : IJoinTable
{
    public required string CharacterId { get; set; }
    public Character Character { get; set; } = null!;
    public required string ItemBaseId { get; set; }
    public ItemBase ItemBase { get; set; } = null!;
    public bool IsEquipped { get; set; } = false;
    public int Quantity { get; set; } = 1;
}