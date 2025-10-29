namespace SharedModels.Models.Dtos.Instances;

public class BackgroundInstanceDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string AbilityScoreDefinitionPlusTwoId { get; set; } = string.Empty;
    public string AbilityScoreDefinitionPlusOneId { get; set; } = string.Empty;
    public FeatInstanceDto? FeatInstance { get; set; } = null;
    public bool SelectedItemSet { get; set; } = false;
    public string DefinitionId { get; set; } = string.Empty;
}