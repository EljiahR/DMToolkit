using DMToolkit.Models.Bases;

namespace DMToolkit.Models.JoinTables;

public class SpellCharacterClass
{
    public required string SpellId { get; set; }
    public required Spell Spell { get; set; }
    public required string CharacterClassBaseId { get; set; }
    public required CharacterClassBase CharacterClassBase { get; set; }
}
