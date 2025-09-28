using DMToolkit.Models.Entities;
using DMToolkit.Models.Instances;

namespace DMToolkit.Models.JoinTables;

public class FeatInstanceFeatEffect : IJoinTable
{
    public required string FeatInstanceId { get; set; }
    public required FeatInstance FeatInstance { get; set; }
    public required string FeatEffectId { get; set; }
    public required FeatEffect FeatEffect { get; set; }
}