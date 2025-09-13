namespace DMToolkit.Models.JoinTables;

public class FeatBaseEffectGroup
{
    public string FeatBaseId { get; set; } = Guid.NewGuid().ToString();
    public string EffectGroupJoinId { get; set; } = Guid.NewGuid().ToString();
}