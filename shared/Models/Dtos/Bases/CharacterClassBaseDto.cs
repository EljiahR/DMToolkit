namespace DMToolkit.Shared.Models.Dtos;

public class CharacterClassBaseDto
{
    public string Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty();
    public string Description { get; set; } = string.Empty();
    public int HitDie { get; set; } = 0;
    public int FixedHp { get; set; } = 0;
    public List<string> SubclassIds { get; set; } = new();
    public List<string> FeatureIds { get; set; } = new();
    public List<int> DefaultScoreArray { get; set; } = new();
}