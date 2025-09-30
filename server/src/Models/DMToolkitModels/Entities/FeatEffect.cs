using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Entities;

public class FeatEffect
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Type { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public Dictionary<string, object> Data = new();
    public ICollection<FeatDefinitionFeatEffect> FeatDefinitionFeatEffects { get; set; } = new List<FeatDefinitionFeatEffect>();
}