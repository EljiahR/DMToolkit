namespace DMToolkit.Models.JoinTables;

public class FeatureBaseEffectGroup
{
    public string FeatureBaseId { get; set; } = Guid.NewGuid().ToString();
    public string EffectGroupJoinId { get; set; } = Guid.NewGuid().ToString();
}