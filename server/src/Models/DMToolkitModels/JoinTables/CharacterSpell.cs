using DMToolkit.API.Models.DMToolkitModels.Entities;
using DMToolkit.API.Models.DMToolkitModels.Instances;

namespace DMToolkit.API.Models.DMToolkitModels.JoinTables;

public class CharacterSpell : IJoinTable
{
    public required string CharacterId { get; set; }
    public Character Character { get; set; } = null!;
    public required string SpellId { get; set; }
    public Spell Spell { get; set; } = null!;
    public bool IsPrepared { get; set; } = false;
}