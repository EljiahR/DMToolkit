using DMToolkit.API.Models.DMToolkitModels.Definitions;

namespace DMToolkit.API.Models.DMToolkitModels.Instances;

public interface IDefinitionInstance<TDefinition>
    where TDefinition : IDefinition
{
    public string Id { get; set; }
    public string DefinitionId { get; set; }
    public TDefinition? Definition { get; set; }
}