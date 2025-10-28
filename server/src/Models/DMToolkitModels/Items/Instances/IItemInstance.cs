using DMToolkit.API.Models.DMToolkitModels.Instances;
using DMToolkit.API.Models.DMToolkitModels.Items.Bases;

namespace DMToolkit.API.Models.DMToolkitModels.Items.Instances;

public interface IItemInstance
{
    public string Id { get; set; }
    public string ItemType { get; set; }
    public int Quantity { get; set; }
    public bool IsEquipped { get; set; }
    public string DefinitionId { get; set; }
    public ItemDefinitionBase? Definition { get; set; }
    public string CharacterId { get; set; }
    public Character? Character { get; set; }
}