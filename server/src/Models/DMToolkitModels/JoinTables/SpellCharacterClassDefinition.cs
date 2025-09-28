using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;

namespace DMToolkit.Models.JoinTables;

public class SpellCharacterClassDefinition : IJoinTable
{
    public required string SpellId { get; set; }
    public required Spell Spell { get; set; }
    public required string CharacterClassBaseId { get; set; }
    public required CharacterClassDefinition CharacterClassDefinition { get; set; }
}
