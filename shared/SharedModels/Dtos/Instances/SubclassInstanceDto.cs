namespace DMToolkit.Shared.Models.Dtos.Instances;

public class SubclassDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string DefinitionId { get; set; } = string.Empty;
    public List<FeatInstanceDto> Features { get; set; } = new();
    public List<string> FeatureInstanceIds { get; set; } = new();  
}