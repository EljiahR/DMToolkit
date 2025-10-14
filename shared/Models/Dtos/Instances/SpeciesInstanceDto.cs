namespace DMToolkit.Shared.Models.Dtos.Instances;

public class SpeciesInstanceDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Size { get; set; } = string.Empty;
    public LineageInstanceDto? LineageInstance { get; set; } = null;
    public ICollection<FeatInstanceDto> FeatInstances { get; set; } = new List<FeatInstanceDto>();
    public string DefinitionId { get; set; } = string.Empty;
}