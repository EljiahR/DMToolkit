namespace DMToolkit.Shared.Models.Dtos.Definitions;

public class SpeciesDefinitionDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public int Speed { get; set; } = 0;
    public string Size { get; set; } = string.Empty;
    public ICollection<FeatDefinitionDto> Feats { get; set; } = new List<FeatDefinitionDto>();
    public ICollection<LineageDefinitionDto> Lineages = new List<LineageDefinitionDto>();
}