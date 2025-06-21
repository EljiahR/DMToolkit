namespace DMTools.Models.GameModels;

public struct Alignment
{
    public Moralities? Morality {get; set;}
    public Orders? Order {get; set;}
    public Alignment(Moralities morality, Orders order)
    {
        Morality = morality;
        Order = order;
    }

    public override string ToString()
    {
        if (Order == null && Morality == null) return "True Neutral";
        return $"{(Order != null ? Order : "Neutral")} {(Morality != null ? Morality : "Neutral")}";
    }
}
public enum Moralities
{
    Good,
    Evil
}

public enum Orders
{
    Lawful,
    Chaotic
}