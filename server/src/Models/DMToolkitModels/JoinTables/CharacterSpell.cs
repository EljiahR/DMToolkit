using DMToolkit.Models.Entities;
using DMToolkit.Models.Instances;

namespace DMToolkit.Models.JoinTables;

public class CharacterSpell : IJoinTable
{
    public required string CharacterId { get; set; }
    public required Character Character { get; set; }
    public required string SpellId { get; set; }
    public required Spell Spell { get; set; }
    public bool IsReadied { get; set; } = false;
}