using DMToolkit.Models.Entities;
using DMToolkit.Models.Items.Entities;

namespace DMToolkit.Models.JoinTables;

public class SpellItem
{
    public required string SpellId { get; set; }
    public required Spell Spell { get; set; }
    public required string ItemId { get; set; }
    public required Item Item { get; set; }
}