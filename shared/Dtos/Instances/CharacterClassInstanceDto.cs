namespace DMToolkit.Shared.Models.Dtos.Instances;

public class CharacterClassDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public int Level { get; set; } = 0;
    public SubclassDto? Subclass { get; set; } = null;
    public string SubclassInstanceId { get; set; } = string.Empty;
    public List<FeatInstanceDto> Features { get; set; } = new();
    public List<string> FeatureInstanceIds { get; set; } = new();
    public string DefinitionId { get; set; } = string.Empty;   
}