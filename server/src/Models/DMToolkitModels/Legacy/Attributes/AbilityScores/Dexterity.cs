namespace DMToolkit.Models.Attributes.AbilityScores;

public class Dexterity : AbilityScoreBase
{
    public Dexterity(int startingScore) : base("Dexterity", startingScore, new List<Skill>
    {
        new Skill("Acrobatics"),
        new Skill("Sleight of Hand"),
        new Skill("Stealth")
    })
    {
    }

}