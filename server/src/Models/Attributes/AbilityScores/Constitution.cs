namespace DMTools.Models.Attributes.AbilityScores;

public class Constitution : AbilityScoreBase
{
    public Constitution(int startingScore) : base("Constitution", startingScore, new List<Skill>{})
    {
    }
}