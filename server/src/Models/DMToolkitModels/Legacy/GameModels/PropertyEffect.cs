namespace DMToolkit.Models.GameModels;

public class PropertyEffect
{
    Dice? Damage {get; set;}
    int? EffectiveRange {get; set;}
    int? MaxRange {get; set;}
    string? AmmoType {get; set;}
    public PropertyEffect(Dice? damage = null, int? effectiveRange = null, int? maxRange = null, string? ammoType = null)
    {
        Damage = damage;
        EffectiveRange = effectiveRange;
        MaxRange = maxRange;
        AmmoType = ammoType;
    }
}