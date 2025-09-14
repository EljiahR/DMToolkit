using DMToolkit.Models.Bases;

namespace DMToolkit.Models.JoinTables;

public class FeatBaseLineageBase
{
    public required string FeatBaseId { get; set; }
    public required FeatBase FeatBase { get; set; }
    public required string LineageBaseId { get; set; }
    public required LineageBase LineageBase { get; set; }
}
