namespace DMToolkit.Shared.Models.Dtos.Instances;

public class CharacterDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Alignment { get; set; } = string.Empty;
    public int Hp { get; set; } = 1;
    public int TempHp { get; set; } = 0;
    public List<CharacterClassInstanceDto> CharacterClassInstances { get; set; } = new();
    public BackgroundInstanceDto BackgroundInstance { get; set; } = new();
    public SpeciesInstanceDto SpeciesInstance { get; set; } = new();
    public List<AbilityScoreInstanceDto> ScoreInstances { get; set; } = new();
    public string PhysicalDescription { get; set; } = string.Empty;
    public string Personality { get; set; } = string.Empty;
    public string Ideals { get; set; } = string.Empty;
    public string Bonds { get; set; } = string.Empty;
    public string Flaws { get; set; } = string.Empty;
    public WorthDto Coins { get; set; } = new();
    public List<string> Inventory { get; set; } = new();
}