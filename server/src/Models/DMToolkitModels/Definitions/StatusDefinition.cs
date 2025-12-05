using DMToolkit.API.Models.DMToolkitModels.Entities;

namespace DMToolkit.API.Models.DMToolkitModels.Definitions;

public class StatusDefinition : IDefinition
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool IsDebuff { get; set; } = false;
    public ICollection<Effect> Effects { get; set; } = new List<Effect>();
}