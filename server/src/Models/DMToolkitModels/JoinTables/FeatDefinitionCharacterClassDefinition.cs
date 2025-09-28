using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.JoinTables;

public class FeatDefinitionCharacterClassDefinition : IJoinTable
{
    public required string FeatDefinitionId { get; set; }
    public required FeatDefinition FeatDefinition { get; set; }
    public required string CharacterClassDefinitionId { get; set; }
    public required CharacterClassDefinition CharacterClassDefinition { get; set; }
}