using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;

namespace DMToolkit.Models.JoinTables;

public class FeatDefinitionFeatEffect : IJoinTable
{
    public string FeatDefinitionId { get; set; }
    public FeatDefinition FeatDefinition { get; set; }
    public string FeatEffectId { get; set; }
    public FeatEffect FeatEffect { get; set; }
    public int Group { get; set; } = 0;
}