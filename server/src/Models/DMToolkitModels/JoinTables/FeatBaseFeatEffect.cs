using DMToolkit.Models.Bases;

namespace DMToolkit.Models.JoinTables;

public class FeatBaseFeatEffect
{
    public required string FeatBaseId { get; set; }
    public required FeatBase FeatBase { get; set; }
    public required string FeatEffectId { get; set; }
    public required FeatEffect FeatEffect { get; set; }
    public int Group { get; set; } = 0;
}