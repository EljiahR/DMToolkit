namespace DMTools.Models.ClassModels;

public class CharacterClass
{
    public string ClassName;
    public List<Subclass> Subclasses {get;} = new();

    public CharacterClass(string name)
    {
        ClassName = name;
    }

    public void AddSubclass(Subclass subclass)
    {
        Subclasses.Add(subclass);
    }
}