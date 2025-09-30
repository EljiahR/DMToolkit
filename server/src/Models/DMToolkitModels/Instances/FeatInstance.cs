using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;

namespace DMToolkit.Models.Instances;

public class FeatInstance : IDefinitionInstance<FeatDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public ICollection<FeatEffect> FeatEffects { get; set; } = new List<FeatEffect>();
    public string DefinitionId { get; set; } = string.Empty;
    public FeatDefinition? Definition { get; set; } = null;
}