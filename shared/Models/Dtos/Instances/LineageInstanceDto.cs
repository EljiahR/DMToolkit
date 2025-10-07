namespace DMToolkit.Shared.Models.Dtos.Instances;

public class LineageDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public List<FeatInstanceDto> Features { get; set; } = new();
    public List<string> FeatureInstanceIds { get; set; } = new();
    public string SpeciesInstanceId { get; set; } = string.Empty;
    public string DefinitionId { get; set; } = string.Empty;
}