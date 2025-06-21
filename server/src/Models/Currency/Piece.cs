namespace DMTools.Models.Currency;

public class Piece 
{
    public string Name {get;}
    public string FullName {get;}
    public int NextStep {get;}
    
    public Piece(string name, string fullName,  int nextStep)
    {
        Name = name;
        FullName = fullName;
        NextStep = nextStep;
    }
}