namespace DMToolkit.Models.JoinTables;

public class FeatureEffectToGroup
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string FeatureEffectId { get; set; } = Guid.NewGuid().ToString();
    public string FeatureEffectGroupId { get; set; } = Guid.NewGuid().ToString();
}
