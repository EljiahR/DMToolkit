using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Entities;

public class Spell
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public int Level { get; set; } = 0;
    public ICollection<SpellSchool> SpellSchools { get; set; } = new List<SpellSchool>();
    public ICollection<SpellCharacterClassDefinition> SpellCharacterClassDefinitions { get; set; } = new List<SpellCharacterClassDefinition>();
    public string CastingTime { get; set; } = string.Empty;
    public string Range { get; set; } = string.Empty;
    public bool VerbalRequired { get; set; } = false;
    public bool SomaticRequired { get; set; } = false;
    public bool MaterialsRequired { get; set; } = false;
    public ICollection<SpellItem> SpellItems { get; set; } = new List<SpellItem>();
    public string Duration { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<SpellEffectSpell> SpellEffectSpells { get; set; } = new List<SpellEffectSpell>();
}
