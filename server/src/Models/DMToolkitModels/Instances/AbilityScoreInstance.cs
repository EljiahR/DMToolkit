using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.Instances;

public class AbilityScoreInstance : IDefinitionInstance<AbilityScoreDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public int Score { get; set; } = 0;
    public bool IsProficient { get; set; } = false;
    public string CharacterId { get; set; } = string.Empty;
    public Character? Character { get; set; } = null;
    public ICollection<SkillInstance> SkillInstances { get; set; } = new List<SkillInstance>();
    public string DefinitionId { get; set; } = string.Empty;
    public AbilityScoreDefinition? Definition { get; set; } = null;
}