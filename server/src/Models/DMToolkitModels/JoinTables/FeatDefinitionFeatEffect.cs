using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;

namespace DMToolkit.Models.JoinTables;

public class FeatDefinitionFeatEffect : IJoinTable
{
    public required string FeatDefinitionId { get; set; }
    public FeatDefinition FeatDefinition { get; set; } = null!;
    public required string FeatEffectId { get; set; }
    public FeatEffect FeatEffect { get; set; } = null!;
    public int Group { get; set; } = 0;
}