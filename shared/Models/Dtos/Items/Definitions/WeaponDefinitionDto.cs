using SharedModels.Enums;
using SharedModels.Models.Dtos.Items.Bases;

namespace SharedModels.Models.Dtos.Items.Definitions;

public class WeaponDefinitionDto : ItemDefinitionBaseDto
{
    public WeaponCategory WeaponCategory { get; set; } = WeaponCategory.Simple;
    public int NumberOfDice { get; set; } = 0;
    public int NumberOfSides { get; set; } = 0;
    public string DamageType { get; set; } = string.Empty;
    public ICollection<string> WeaponPropertyIds { get; set; } = new List<string>();
    public string? WeaponMasteryId { get; set; } = null;
}