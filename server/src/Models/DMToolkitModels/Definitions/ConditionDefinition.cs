using DMToolkit.API.Models.DMToolkitModels.Entities;

namespace DMToolkit.API.Models.DMToolkitModels.Definitions;

public class ConditionDefinition : IDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool IsDebuff { get; set; } = false;
    public string Duration { get; set;} = string.Empty;
    public ICollection<Effect> Effects { get; set; } = new List<Effect>();
}