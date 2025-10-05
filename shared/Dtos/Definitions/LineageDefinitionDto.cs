namespace DMToolkit.Shared.Models.Dtos.Definitions;

public class LineageDefinitionDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<FeatDefinitionDto> Feats { get; set; } = new List<FeatDefinitionDto>();
}