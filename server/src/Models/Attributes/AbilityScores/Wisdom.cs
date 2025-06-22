namespace DMToolkit.Models.Attributes.AbilityScores;

public class Wisdom : AbilityScoreBase
{
    public Wisdom(int startingScore) : base("Wisdom", startingScore, new List<Skill>
    {
        new Skill("Animal Handling"),
        new Skill("Insight"),
        new Skill("Medicine"),
        new Skill("Perception"),
        new Skill("Survival")
    })
    {
    }
}