using DMToolkit.API.Models.DMToolkitModels.JoinTables;

namespace DMToolkit.API.Models.DMToolkitModels.Definitions;

public class BackgroundDefinition : IDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<AbilityScoreDefinition> AbilityScoreDefinitions { get; set; } = new List<AbilityScoreDefinition>();
    public string FeatDefinitionId { get; set; } = string.Empty;
    public FeatDefinition? FeatDefinition { get; set; } = null;
    public ICollection<SkillDefinition> SkillDefinitions { get; set; } = new List<SkillDefinition>();
    public ICollection<BackgroundDefinitionItemDefinitionBase> BackgroundDefinitionItemDefinitionBases { get; set; } = new List<BackgroundDefinitionItemDefinitionBase>();
    public int StartingGp { get; set; } = 50;
}