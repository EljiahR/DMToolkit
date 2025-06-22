using DMToolkit.Models.GameModels;

namespace DMToolkit.Models.Items.Equipment.WeaponModels;

public class WeaponProperty : Property
{
    public WeaponProperty(string name,  string description, PropertyEffect? effect = null) : base(name, description, effect)
    {
    }
}