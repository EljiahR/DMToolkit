using DMToolkit.API.Models.DMToolkitModels.Definitions;
using DMToolkit.API.Models.DMToolkitModels.Entities;

namespace DMToolkit.API.Models.DMToolkitModels.Instances;

public class FeatInstance : IDefinitionInstance<FeatDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public ICollection<Effect> FeatEffects { get; set; } = new List<Effect>();
    public string DefinitionId { get; set; } = string.Empty;
    public FeatDefinition? Definition { get; set; } = null;
}