using DMToolkit.Models.Items.Definitions;
using DMToolkit.Models.Items.Entities;

namespace DMToolkit.Models.JoinTables;

public class WeaponDefinitionWeaponProperty
{
    public required string WeaponDefinitionId { get; set; }
    public required WeaponDefinition WeaponDefinition { get; set; }
    public required string WeaponPropertyId { get; set; }
    public required WeaponProperty WeaponProperty { get; set; }
}