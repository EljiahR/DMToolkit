namespace DMTools.Models.ClassModels;

public class Subclass
{
    public string Name;
    public CharacterClass BaseClass;

    public Subclass(string name, CharacterClass baseClass)
    {
        Name = name;
        BaseClass = baseClass;
        baseClass.AddSubclass(this);
    }
}