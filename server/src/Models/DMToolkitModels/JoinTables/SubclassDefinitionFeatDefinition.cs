using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.JoinTables;

public class SubclassDefinitionFeatDefinition : IJoinTable
{
    public required string CharacterClassDefinitionId { get; set; }
    public SubclassDefinition SubclassDefinition { get; set; } = null!;
    public required string FeatDefinitionId { get; set; }
    public FeatDefinition FeatDefinition { get; set; } = null!;
    public int Level { get; set; } = 0;
    public int Group { get; set; } = 0;
}