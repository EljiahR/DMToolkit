using DMTools.Models.Currency;
using DMTools.Models.Items;

namespace DMTools.Models.Items.Equipment;

public enum ArmorType
{
    Light,
    Medium,
    Heavy,
    Shield
}

public class Armor : Item
{
    public int AC {get; set;}
    public ArmorType Type {get; set;}
    public int StrengthRequirement {get; set;}
    public bool StealthDisadvantage {get; set;}
    public int Don {get; set;}
    public int Doff {get; set;}
    
    public Armor(string name, float weight, Worth itemWorth) : base(name, weight, itemWorth)
    {
    }
    
    public override string ToString()
    {
        return Name;
    }
}