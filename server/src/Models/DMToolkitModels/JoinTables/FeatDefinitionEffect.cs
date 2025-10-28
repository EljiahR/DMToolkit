using DMToolkit.API.Models.DMToolkitModels.Definitions;
using DMToolkit.API.Models.DMToolkitModels.Entities;

namespace DMToolkit.API.Models.DMToolkitModels.JoinTables;

public class FeatDefinitionEffect : IJoinTable
{
    public required string FeatDefinitionId { get; set; }
    public FeatDefinition FeatDefinition { get; set; } = null!;
    public required string EffectId { get; set; }
    public Effect Effect { get; set; } = null!;
    public int Group { get; set; } = 0;
}