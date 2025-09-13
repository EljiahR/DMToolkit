namespace DMToolkit.Models.JoinTables;

public class FeatureEffectToGroup
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string FeatEffectId { get; set; } = Guid.NewGuid().ToString();
    public string FeatEffectGroupId { get; set; } = Guid.NewGuid().ToString();
}
