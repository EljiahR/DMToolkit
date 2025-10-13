using DMToolkit.Models.Definitions;
using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Entities;

public class Spell
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public int Level { get; set; } = 0;
    public School? School { get; set; } = null;
    public ICollection<CharacterClassDefinition> CharacterClassDefinitions { get; set; } = new List<CharacterClassDefinition>();
    public string CastingTime { get; set; } = string.Empty;
    public string Range { get; set; } = string.Empty;
    public bool VerbalRequired { get; set; } = false;
    public bool SomaticRequired { get; set; } = false;
    public bool MaterialsRequired { get; set; } = false;
    public ICollection<SpellItem> SpellItems { get; set; } = new List<SpellItem>();
    public string Duration { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<SpellEffect> SpellEffects { get; set; } = new List<SpellEffect>();
}
