using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.JoinTables;

public class FeatDefinitionSubclassDefinition
{
    public required string FeatDefinitionId { get; set; }
    public required FeatDefinition FeatDefinition { get; set; }
    public required string SubclassDefinitionId { get; set; }
    public required SubclassDefinition SubclassDefinition { get; set; }
}
