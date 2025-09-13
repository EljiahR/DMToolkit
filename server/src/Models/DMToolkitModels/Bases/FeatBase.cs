using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Bases;

public class FeatBase
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<FeatBaseEffectGroup> EffectGroups { get; set; } = new();
}