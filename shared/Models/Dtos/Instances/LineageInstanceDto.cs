namespace SharedModels.Models.Dtos.Instances;

public class LineageInstanceDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public List<FeatInstanceDto> FeatInstances { get; set; } = new();
    public string DefinitionId { get; set; } = string.Empty;
}