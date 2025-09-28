using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.JoinTables;

public class FeatDefinitionLineageDefinition : IJoinTable
{
    public required string FeatDefinitionId { get; set; }
    public required FeatDefinition FeatDefinition { get; set; }
    public required string LineageDefinitionId { get; set; }
    public required LineageDefinition LineageDefinition { get; set; }
}
