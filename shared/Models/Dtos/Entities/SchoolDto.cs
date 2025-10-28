namespace SharedModels.Models.Dtos.Entities;

public class SchoolDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
}