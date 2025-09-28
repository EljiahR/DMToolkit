using DMToolkit.Models.Definitions;
using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Instances;

public class FeatInstance
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public ICollection<FeatInstanceFeatEffect> FeatInstanceFeatEffects { get; set; } = new List<FeatInstanceFeatEffect>();
    public string DefinitionId { get; set; } = string.Empty;
    public FeatDefinition? Definition { get; set; } = null;
}