namespace DMToolkit.API.Models.DMToolkitModels.Definitions;

public class AbilityScoreDefinition : IDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Abbreviation { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<SkillDefinition> SkillDefinitions { get; set; } = new List<SkillDefinition>();
    public ICollection<BackgroundDefinition> BackgroundDefinitions { get; set; } = new List<BackgroundDefinition>();
}