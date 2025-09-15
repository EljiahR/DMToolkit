using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.JoinTables;

public class FeatDefinitionFeatEffect
{
    public required string FeatDefinitionId { get; set; }
    public required FeatDefinition FeatDefinition { get; set; }
    public required string FeatEffectId { get; set; }
    public required FeatEffect FeatEffect { get; set; }
    public int Group { get; set; } = 0;
}