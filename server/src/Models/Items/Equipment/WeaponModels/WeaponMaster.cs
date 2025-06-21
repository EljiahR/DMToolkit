using DMTools.Models.GameModels;

namespace DMTools.Models.Items.Equipment.WeaponModels;

public class WeaponMastery : Property
{
    public WeaponMastery(string name,  string description, PropertyEffect? effect = null) : base(name, description, effect)
    {
    }
}