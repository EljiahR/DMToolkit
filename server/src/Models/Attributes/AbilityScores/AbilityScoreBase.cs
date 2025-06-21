namespace DMTools.Models.Attributes.AbilityScores;

public abstract class AbilityScoreBase : IAbilityScore
{
    public string Name { get; }
    private int _score;
    public int Score 
    { 
        get => _score; 
        set => _score = Math.Clamp(value, 1, 30);
    }
    public bool SavingThrowProficient {get; set;} = false;
    public List<Skill> Skills { get;} = new();

    protected AbilityScoreBase(string name, int startingScore, List<Skill> initialSkills)
    {
        Name = name;
        _score = startingScore;
        foreach (var skill in initialSkills)
        {
            skill.BaseAbility = this;
            Skills.Add(skill);
        }
    }

    public int GetModifier() => Math.Clamp(Score / 2 - 5, -5, 10);
}