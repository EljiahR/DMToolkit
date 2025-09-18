using DMToolkit.Models.Items.Definitions;
using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Items.Entities;

public class WeaponProperty
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public Dictionary<string, object> Data = new();
    public ICollection<WeaponDefinitionWeaponProperty> WeaponDefinitionWeaponProperties { get; set; } = new List<WeaponDefinitionWeaponProperty>();
    public ICollection<WeaponDefinition> WeaponMasteries { get; set; } = new List<WeaponDefinition>();
}