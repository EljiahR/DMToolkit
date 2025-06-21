namespace DMTools.Models.Attributes.AbilityScores;

public interface IAbilityScore
{
    public string Name {get;}
    public int Score {get; set;}
    public bool SavingThrowProficient {get; set;}
    public int GetModifier(){
        int result = Score / 2 - 5;
        return result < -5 ? -5 : result > 10 ? 10 : result;
    }
    public List<Skill> Skills {get;}
}