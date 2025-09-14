using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Bases;

public class FeatBase
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<FeatBaseFeatEffect> FeatBaseFeatEffects { get; set; } = new();
    public List<FeatBaseCharacterClassBase> FeatBaseCharacterClassBases { get; set; } = new();
    public List<FeatBaseLineageBase> FeatBaseLineageBases { get; set; } = new();
    public List<FeatBaseSpeciesBase> FeatBaseSpeciesBases { get; set; } = new();
    public List<FeatBaseSubclassBase> FeatBaseSubclassBases { get; set; } = new();
}