namespace SharedModels.Models.Dtos.Definitions;

public class LineageDefinitionDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<string> FeatDefinitionIds { get; set; } = new List<string>();
}