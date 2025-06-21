namespace DMTools.Models.Items.Equipment.WeaponModels;

public class Ammunition : Item
{
    public int Quantity {get; set;}
    
    public Ammunition(string name, int quantity) : base(name, 0f, new())
    {
        Quantity = quantity;
    }
    public override string ToString()
    {
        return $"{Quantity} {Name.ToLower()}" + (Quantity == 1 ? "" : "s");
    }
}