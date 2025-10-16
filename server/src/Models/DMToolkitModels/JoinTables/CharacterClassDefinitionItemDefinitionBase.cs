using DMToolkit.Models.Definitions;
using DMToolkit.Models.Items.Bases;

namespace DMToolkit.Models.JoinTables;

public class CharacterClassDefinitionItemDefinitionBase : IJoinTable
{
    public required string CharacterClassDefinitionId { get; set; }
    public CharacterClassDefinition CharacterClassDefinition { get; set; } = null!;
    public required string ItemDefinitionBaseId { get; set; }
    public ItemDefinitionBase ItemDefinitionBase { get; set; } = null!;
    public int Quantity { get; set; } = 1;
}