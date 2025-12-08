using DMToolkit.API.Models.DMToolkitModels.Definitions;

namespace DMToolkit.API.Models.DMToolkitModels.Instances;

public class ConditionInstance : IDefinitionInstance<ConditionDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string RemainingDuration { get; set; } = string.Empty;
    public string DefinitionId { get; set;} = string.Empty;
    public ConditionDefinition? Definition { get; set; } = null;
}