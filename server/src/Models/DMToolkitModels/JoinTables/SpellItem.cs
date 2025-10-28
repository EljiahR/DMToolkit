using DMToolkit.API.Models.DMToolkitModels.Entities;
using DMToolkit.API.Models.DMToolkitModels.Items.Bases;

namespace DMToolkit.API.Models.DMToolkitModels.JoinTables;

public class SpellItem : IJoinTable
{
    public required string SpellId { get; set; }
    public Spell Spell { get; set; } = null!;
    public required string ItemId { get; set; }
    public ItemDefinitionBase ItemDefinitionBase { get; set; } = null!;
    public int AmountRequired { get; set; } = 0;
}