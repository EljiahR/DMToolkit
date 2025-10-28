using DMToolkit.API.Models.DMToolkitModels.Definitions;

namespace DMToolkit.API.Models.DMToolkitModels.Instances;

public class BackgroundInstance : IDefinitionInstance<BackgroundDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string AbilityScoreDefinitionPlusTwoId { get; set; } = string.Empty;
    public string AbilityScoreDefinitionPlusOneId { get; set; } = string.Empty;
    public string FeatInstanceId { get; set; } = string.Empty;
    public FeatInstance? FeatInstance { get; set; } = null;
    public string DefinitionId { get; set; } = string.Empty;
    public BackgroundDefinition? Definition { get; set; } = null;
}