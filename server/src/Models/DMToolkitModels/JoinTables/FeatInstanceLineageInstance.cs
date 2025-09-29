using DMToolkit.Models.Instances;

namespace DMToolkit.Models.JoinTables;

public class FeatInstanceLineageInstance : IJoinTable
{
    public required string FeatInstanceId { get; set; }
    public required FeatInstance FeatInstance { get; set; }
    public required string LineageInstanceId { get; set; }
    public required LineageInstance LineageInstance { get; set; }
}