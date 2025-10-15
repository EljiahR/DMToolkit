using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;

namespace DMToolkit.Models.JoinTables;

public class FeatDefinitionEffect : IJoinTable
{
    public required string FeatDefinitionId { get; set; }
    public FeatDefinition FeatDefinition { get; set; } = null!;
    public required string EffectId { get; set; }
    public Effect Effect { get; set; } = null!;
    public int Group { get; set; } = 0;
}