using DMToolkit.Models.Definitions;
using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Instances;

public class LineageInstance : IDefinitionInstance<LineageDefinition>
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public ICollection<FeatInstanceLineageInstance> FeatInstanceLineageInstances { get; set; } = new List<FeatInstanceLineageInstance>();
    public string SpeciesInstanceId { get; set; } = string.Empty;
    public SpeciesInstance? SpeciesInstance { get; set; } = null; 
    public string DefinitionId { get; set; } = string.Empty;
    public LineageDefinition? Definition { get; set; } = null;
}