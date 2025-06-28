namespace DMToolkit.Models.Attributes.AbilityScores;

public class Strength : AbilityScoreBase
{
    public Strength(int startingScore) : base("Strength", startingScore, new List<Skill>
            {
                new Skill("Athletics")
            })
    {
    }
}