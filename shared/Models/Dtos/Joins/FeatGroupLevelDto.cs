namespace DMToolkit.Shared.Models.Dtos.Joins;

public class FeatGroupLevelDto
{
    public int Level { get; set; } = 0;
    public int Group { get; set; } = 0;
    public List<string> FeatDefinitionIds { get; set; } = new();
}