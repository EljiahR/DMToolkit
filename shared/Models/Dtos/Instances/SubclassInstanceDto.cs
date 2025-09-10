namespace DMToolkit.Shared.Models.Dtos;

public class SubclassDto
{
    public string Id { get; set; } = Guid.NewGuid();
    public string BaseId { get; set; } = string.Empty();
    public List<FeatureDto> Features { get; set; } = new();
    public List<string> FeatureInstanceIds { get; set; } = new();  
}