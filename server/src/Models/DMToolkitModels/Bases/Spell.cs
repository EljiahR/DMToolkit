using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Bases;

public class Spell
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public int Level { get; set; } = 0;
    public List<SpellSchool> SpellSchools { get; set; } = new();
    public List<SpellCharacterClass> SpellCharacterClasses { get; set; } = new();
    public string CastingTime { get; set; } = string.Empty;
    public string Range { get; set; } = string.Empty;
    public string ComponentOne { get; set; } = string.Empty;
    public string ComponentTwo { get; set; } = string.Empty;
    public string ComponentThree { get; set; } = string.Empty;
    // materialComponents
    public string Duration { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<SpellEffectSpell> SpellEffectSpells { get; set; } = new();
}
