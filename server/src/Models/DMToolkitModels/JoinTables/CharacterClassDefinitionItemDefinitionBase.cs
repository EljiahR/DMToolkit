using DMToolkit.API.Models.DMToolkitModels.Definitions;
using DMToolkit.API.Models.DMToolkitModels.Items.Bases;

namespace DMToolkit.API.Models.DMToolkitModels.JoinTables;

public class CharacterClassDefinitionItemDefinitionBase : IJoinTable
{
    public required string CharacterClassDefinitionId { get; set; }
    public CharacterClassDefinition CharacterClassDefinition { get; set; } = null!;
    public required string ItemDefinitionBaseId { get; set; }
    public ItemDefinitionBase ItemDefinitionBase { get; set; } = null!;
    public int Quantity { get; set; } = 1;
}