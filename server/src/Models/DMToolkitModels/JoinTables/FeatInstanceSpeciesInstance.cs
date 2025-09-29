using DMToolkit.Models.Instances;

namespace DMToolkit.Models.JoinTables;

public class FeatInstanceSpeciesInstance : IJoinTable
{
    public required string FeatInstanceId { get; set; }
    public required FeatInstance FeatInstance { get; set; }
    public required string SpeciesInstanceId { get; set; }
    public required SpeciesInstance SpeciesInstance { get; set; }
}