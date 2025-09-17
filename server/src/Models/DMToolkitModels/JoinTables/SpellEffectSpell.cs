using DMToolkit.Models.Entities;

namespace DMToolkit.Models.JoinTables;

public class SpellEffectSpell
{
    public required string SpellEffectId { get; set; }
    public required SpellEffect SpellEffect { get; set; }
    public required string SpellId { get; set; }
    public required Spell Spell { get; set; }
}