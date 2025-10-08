using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.JoinTables;

public class CharacterClassDefinitionFeatDefinition : IJoinTable, IClassFeat
{
    public required string CharacterClassDefinitionId { get; set; }
    public CharacterClassDefinition CharacterClassDefinition { get; set; } = null!;
    public required string FeatDefinitionId { get; set; }
    public FeatDefinition FeatDefinition { get; set; } = null!;
    public int Level { get; set; } = 0;
    public int Group { get; set; } = 0;
}