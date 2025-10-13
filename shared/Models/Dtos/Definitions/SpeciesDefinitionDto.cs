namespace DMToolkit.Shared.Models.Dtos.Definitions;

public class SpeciesDefinitionDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public int Speed { get; set; } = 0;
    public string Size { get; set; } = string.Empty;
    public ICollection<string> FeatDefinitionIds { get; set; } = new List<string>();
    public ICollection<LineageDefinitionDto> LineageDefinitions = new List<LineageDefinitionDto>();
}