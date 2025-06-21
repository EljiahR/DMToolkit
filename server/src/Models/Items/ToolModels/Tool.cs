using DMTools.Models.Currency;

namespace DMTools.Models.Items.ToolModels;

public class Tool : Item, ITools
{
    public Tool /* You LMAO */(string name, float weight, Worth itemWorth) : base(name, weight, itemWorth)
    {
        Name = name;
    }
    
    public override string ToString()
    {
        return Name;
    }
}