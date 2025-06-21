using DMTools.Models.Currency;

namespace DMTools.Models.Items;

public abstract class Item
{
    public string Name {get; set;}
    public float Weight {get; set;}
    public Worth ItemWorth {get; set;} 
    
    protected Item(string name, float weight, Worth itemWorth)
    {
        Name = name;
        Weight = weight;
        ItemWorth = itemWorth;
    }
    public abstract override string ToString();
}