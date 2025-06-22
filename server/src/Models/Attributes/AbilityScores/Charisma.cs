namespace DMToolkit.Models.Attributes.AbilityScores;

public class Charisma : AbilityScoreBase
{
    public Charisma(int startingScore) : base("Charisma", startingScore, new List<Skill>
    {
        new Skill("Deception"),
        new Skill("Intimidation"),
        new Skill("Performance"),
        new Skill("Persuasion")
    })
    {
    }

}