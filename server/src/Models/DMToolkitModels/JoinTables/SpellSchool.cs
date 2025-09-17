using DMToolkit.Models.Entities;

namespace DMToolkit.Models.JoinTables;

public class SpellSchool
{
    public required string SpellId { get; set; }
    public required Spell Spell { get; set; }
    public required string SchoolId { get; set; }
    public required School School { get; set; }
}
