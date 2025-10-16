using DMToolkit.Models.Definitions;
using DMToolkit.Models.Items.Bases;

namespace DMToolkit.Models.JoinTables;

public class CharacterClassDefinitionItemDefinitionBase : IJoinTable
{
    public required string CharacterClassDefinitionId { get; set; }
    public CharacterClassDefinition CharacterClassDefinition { get; set; } = null!;
    public required string ItemBaseId { get; set; }
    public ItemDefinitionBase ItemBase { get; set; } = null!;
    public int Group { get; set; } = 0;
}