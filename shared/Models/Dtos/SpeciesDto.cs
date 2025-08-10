namespace DMToolkit.Shared.Models.Dtos;

public class SpeciesDto
{
    public string Id { get; set; } = Guid.NewGuid();
    public List<FeatureDto> Features { get; set; } = new();
    public List<string> FeatureInstanceIds { get; set; } = new();
    public LineageDto Lineage { get; set; } = new();
    public string LineageInstanceId { get; set; } = string.Empty();
    public string BaseId { get; set; } = string.Empty();  
}