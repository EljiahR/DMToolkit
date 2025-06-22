using DMToolkit.Models.GameModels;

namespace DMToolkit.Models.Items.Equipment.WeaponModels;

public class WeaponMastery : Property
{
    public WeaponMastery(string name,  string description, PropertyEffect? effect = null) : base(name, description, effect)
    {
    }
}