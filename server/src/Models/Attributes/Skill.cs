using DMToolkit.Models.Attributes.AbilityScores;

namespace DMToolkit.Models.Attributes;

public class Skill
{
    public string SkillName {get;}
    public bool IsProficient {get; set;} = false;
    public IAbilityScore BaseAbility{get; set;} = null!;
    public Skill(string name, bool isProficient = false)
    {
        SkillName = name;
        IsProficient = isProficient;
    }

    public int GetModifier(int proficiencyBonus)
    {
        return BaseAbility.GetModifier() + (IsProficient ? proficiencyBonus : 0);
    }
}