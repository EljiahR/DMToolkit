namespace DMToolkit.Shared.Models.Dtos.Instances;

public class SpeciesDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public List<FeatInstanceDto> Features { get; set; } = new();
    public List<string> FeatureInstanceIds { get; set; } = new();
    public LineageDto Lineage { get; set; } = new();
    public string LineageInstanceId { get; set; } = string.Empty;
    public string DefinitionId { get; set; } = string.Empty;  
}