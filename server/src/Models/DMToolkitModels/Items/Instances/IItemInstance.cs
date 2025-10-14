using DMToolkit.Models.Items.Bases;

namespace DMToolkit.Models.Items.Instances;

public interface IItemInstance
{
    public string Id { get; set; }
    public string DefinitionId { get; set; }
    public ItemDefinitionBase? Definition { get; set; }
}