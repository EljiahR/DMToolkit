namespace DMToolkit.Shared.Models.Dtos;

public class CharacterClassDto
{
    public string Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty();
    public string Description { get; set; } = string.Empty();
    public int Level { get; set; } = 0;
    public SubclassDto Subclass { get; set; } = new();
    public string SubclassInstanceId { get; set; } = string.Empty();
    public List<FeatureDto> Features { get; set; } = new();
    public List<string> FeatureInstanceIds { get; set; } = new();
    public string BaseId { get; set; } = string.Empty();   
}