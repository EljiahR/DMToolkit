namespace DMToolkit.Shared.Models.Dtos.Instances;

public class SubclassInstanceDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public ICollection<FeatInstanceDto> FeatInstances { get; set; } = new List<FeatInstanceDto>();
    public string DefinitionId { get; set; } = string.Empty;
}