namespace DMToolkit.Shared.Models.Dtos.Joins;

public class FeatDefinitionEffectGroupingDto
{
    public int Group { get; set; } = 0;
    public List<string> EffectIds { get; set; } = new();
}