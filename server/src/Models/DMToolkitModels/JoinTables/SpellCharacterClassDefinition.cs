using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.JoinTables;

public class SpellCharacterClassDefinition
{
    public required string SpellId { get; set; }
    public required Spell Spell { get; set; }
    public required string CharacterClassBaseId { get; set; }
    public required CharacterClassDefinition CharacterClassDefinition { get; set; }
}
