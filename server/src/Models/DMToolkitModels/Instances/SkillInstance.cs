using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.Instances;

public class SkillInstance : IDefinitionInstance<SkillDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public bool IsProficient { get; set; } = false;
    public string AbilityScoreInstanceId { get; set; } = string.Empty;
    public AbilityScoreInstance? AbilityScoreInstance { get; set; } = null;
    public string DefinitionId { get; set; } = string.Empty;
    public SkillDefinition? Definition { get; set; } = null;
}