using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.Instances;

public class AbilityScoreInstance
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public int Score { get; set; } = 0;
    public bool IsProficient { get; set; } = false;
    public string DefinitionId { get; set; } = string.Empty;
    public AbilityScoreDefinition? Definition { get; set; } = null;
    public ICollection<SkillInstance> SkillInstances { get; set; } = new List<SkillInstance>();
}