namespace DMToolkit.Shared.Models.Dtos;

public class LineageDto
{
    public string Id { get; set; } = Guid.NewGuid();
    public List<FeatureDto> Features { get; set; } = new();
    public List<string> FeatureInstanceIds { get; set; } = new();
    public string SpeciesInstanceId { get; set; } = string.Empty();
    public string BaseId { get; set; } = string.Empty();
}