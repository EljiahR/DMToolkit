using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.Instances;

public interface IDefinitionInstance<TDefinition>
    where TDefinition : IDefinition
{
    public string Id { get; set; }
    public string DefinitionId { get; set; }
    public TDefinition? Definition { get; set; }
}