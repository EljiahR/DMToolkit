using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.Instances;

public class LineageInstance : IDefinitionInstance<LineageDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public ICollection<FeatInstance> FeatInstances { get; set; } = new List<FeatInstance>();
    public string SpeciesInstanceId { get; set; } = string.Empty;
    public SpeciesInstance? SpeciesInstance { get; set; } = null; 
    public string DefinitionId { get; set; } = string.Empty;
    public LineageDefinition? Definition { get; set; } = null;
}