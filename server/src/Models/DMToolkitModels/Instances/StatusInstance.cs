using DMToolkit.API.Models.DMToolkitModels.Definitions;

namespace DMToolkit.API.Models.DMToolkitModels.Instances;

public class StatusInstance : IDefinitionInstance<StatusDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string DefinitionId { get; set;} = string.Empty;
    public StatusDefinition? Definition { get; set; } = null;
}