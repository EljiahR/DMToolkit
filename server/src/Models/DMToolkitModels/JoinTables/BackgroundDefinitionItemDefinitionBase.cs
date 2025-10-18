using DMToolkit.Models.Definitions;
using DMToolkit.Models.Items.Bases;

namespace DMToolkit.Models.JoinTables;

public class BackgroundDefinitionItemDefinitionBase : IJoinTable
{
    public required string BackgroundDefinitionId { get; set; }
    public BackgroundDefinition BackgroundDefinition { get; set; } = null!;
    public required string ItemDefinitionBaseId { get; set; }
    public ItemDefinitionBase ItemDefinitionBase { get; set; } = null!;
    public int Quantity { get; set; } = 1;
}