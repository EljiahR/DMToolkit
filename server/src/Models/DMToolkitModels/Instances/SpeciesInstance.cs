using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.Instances;

public class SpeciesInstance : IDefinitionInstance<SpeciesDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Size { get; set; } = string.Empty;
    public string LineageInstanceId { get; set; } = string.Empty;
    public LineageInstance? LineageInstance { get; set; } = null;
    public ICollection<FeatInstance> FeatInstances { get; set; } = new List<FeatInstance>();
    public string DefinitionId { get; set; } = string.Empty;
    public SpeciesDefinition? Definition { get; set; } = null;
}