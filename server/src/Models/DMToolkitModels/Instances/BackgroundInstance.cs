using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.Instances;

public class BackgroundInstance
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string SelectedAbilityScorePlusTwo { get; set; } = string.Empty;
    public string SelectedAbilityScorePlusOne { get; set; } = string.Empty;
    public string FeatInstanceId { get; set; } = string.Empty;
    public FeatInstance? FeatInstance { get; set; } = null;
    public string BackgroundDefinitionId { get; set; } = string.Empty;
    public BackgroundDefinition? Definition { get; set; } = null;
}