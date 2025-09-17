using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Entities;

public class Spell
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public int Level { get; set; } = 0;
    public List<SpellSchool> SpellSchools { get; set; } = new();
    public List<SpellCharacterClassDefinition> SpellCharacterClassDefinitions { get; set; } = new();
    public string CastingTime { get; set; } = string.Empty;
    public string Range { get; set; } = string.Empty;
    public bool VerbalRequired { get; set; } = false;
    public bool SomaticRequired { get; set; } = false;
    public bool MaterialsRequired { get; set; } = false;
    public List<SpellItem> SpellItems { get; set; } = new();
    public string Duration { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<SpellEffectSpell> SpellEffectSpells { get; set; } = new();
}
