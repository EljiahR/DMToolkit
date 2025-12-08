namespace SharedModels.Models.Dtos.Instances;

public class ConditionInstanceDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string RemainingDuration { get; set; } = string.Empty;
    public string DefinitionId { get; set;} = string.Empty;
}