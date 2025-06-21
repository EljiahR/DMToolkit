using DMTools.Models.Currency;
using DMTools.Models.GameModels;

namespace DMTools.Models.Items.Equipment.WeaponModels;

public class Weapon : Item
{
    public DamageTypes DamageType {get; set;}
    public Dice Damage {get; set;}
    public WeaponProperty[] Properties {get; set;}
    public WeaponMastery? Mastery {get; set;}
    public string CustomName {get; set;}
    
    public Weapon(string name, float weight, Worth itemWorth, DamageTypes damageType,
        Dice damage, WeaponProperty[] properties,
        WeaponMastery? mastery = null, string customName = "") : base(name, weight, itemWorth)
    {
        DamageType = damageType;
        Damage = damage;
        Properties = properties;
        Mastery = mastery;
        CustomName = string.IsNullOrEmpty(customName) ? name : customName;
    }
    
    public override string ToString() => CustomName;
    
    public string GetWeaponType() => Name;
    
    public int Roll() => Damage.Roll();
}