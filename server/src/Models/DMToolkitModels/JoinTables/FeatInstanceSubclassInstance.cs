using DMToolkit.Models.Instances;

namespace DMToolkit.Models.JoinTables;

public class FeatInstanceSubclassInstance : IJoinTable
{
    public required string FeatInstanceId { get; set; }
    public required FeatInstance FeatInstance { get; set; }
    public required string SubclassInstanceId { get; set; }
    public required SubclassInstance SubclassInstance { get; set; }
}