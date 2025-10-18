using DMToolkit.Models.Items.Definitions;
using DMToolkit.Models.JoinTables;
using DMToolkit.Shared.Models.Enums;

namespace DMToolkit.Models.Entities;

public class Effect
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string? Title { get; set; } = null;
    public string? Description { get; set; } = null;
    public OriginType OriginType { get; set; } = OriginType.Other;
    public DataType DataType { get; set; } = DataType.Other;
    public Dictionary<string, object> Data { get; set; } = new();
    public ICollection<FeatDefinitionEffect> FeatDefinitionEffects { get; set; } = new List<FeatDefinitionEffect>();
    public ICollection<Spell> Spells { get; set; } = new List<Spell>();
    public ICollection<WeaponDefinition> WeaponDefinitionProperties { get; set; } = new List<WeaponDefinition>();
    public ICollection<WeaponDefinition> WeaponDefinitionMasteries { get; set; } = new List<WeaponDefinition>();
}