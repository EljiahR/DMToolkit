using DMToolkit.Models.Definitions;
using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Instances;

public class SpeciesInstance : IDefinitionInstance<SpeciesDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string LineageInstanceId { get; set; } = string.Empty;
    public LineageInstance? LineageInstance { get; set; } = null;
    public ICollection<FeatInstanceSpeciesInstance> FeatInstanceSpeciesInstances { get; set; } = new List<FeatInstanceSpeciesInstance>();
    public string DefinitionId { get; set; } = string.Empty;
    public SpeciesDefinition? Definition { get; set; } = null;
}