using DMToolkit.Models.Bases;

namespace DMToolkit.Models.JoinTables;

public class FeatBaseSpeciesBase
{
    public required string FeatBaseId { get; set; }
    public required FeatBase FeatBase { get; set; }
    public required string SpeciesBaseId { get; set; }
    public required SpeciesBase SpeciesBase { get; set; }
}
