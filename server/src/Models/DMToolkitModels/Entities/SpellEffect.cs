using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Entities;

public class SpellEffect
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string? Subtitle { get; set; }
    public string Type { get; set; } = string.Empty;
    public Dictionary<string, object> Data { get; set; } = new();
    public List<SpellEffectSpell> SpellEffectSpells { get; set; } = new();
}
