using DMToolkit.Models.Entities;
using DMToolkit.Models.Items.Entities;

namespace DMToolkit.Models.JoinTables;

public class SpellItem : IJoinTable
{
    public required string SpellId { get; set; }
    public Spell Spell { get; set; } = null!;
    public required string ItemId { get; set; }
    public Item Item { get; set; } = null!;
    public int AmountRequired { get; set; } = 0;
}