using DMTools.Models.GameModels;

namespace DMTools.Models.Items.Equipment.WeaponModels;

public class WeaponProperty : Property
{
    public WeaponProperty(string name,  string description, PropertyEffect? effect = null) : base(name, description, effect)
    {
    }
}