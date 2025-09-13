namespace DMToolkit.Models.Attributes.AbilityScores;

public class Intelligence : AbilityScoreBase
{
    public Intelligence(int startingScore) : base("Intelligence",startingScore, new List<Skill>
    {
        new Skill("Arcana"),
        new Skill("History"),
        new Skill("Investigation"),
        new Skill("Nature"),
        new Skill("Religion")
    })
    {
    }

}