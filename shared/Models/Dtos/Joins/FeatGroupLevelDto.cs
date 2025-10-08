namespace DMToolkit.Shared.Models.Dtos.Joins;

public class FeatGroupLevelDto
{
    public int Level { get; set; } = 0;
    public int Group { get; set; } = 0;
    public List<string> FeatIds { get; set; } = new();
}