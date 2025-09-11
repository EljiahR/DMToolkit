namespace DMToolkit.Shared.Models.Dtos;

public class CharacterDto
{
    public string Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty();
    public string Alignment { get; set; } = string.Empty();
    public int Hp { get; set; } = 1;
    public List<int> HpRolls { get; set; } = new();
    public int TempHp { get; set; } = 0;
    public CharacterClassDto CharacterClass { get; set; } = new();
    public string ClassInstanceId { get; set; } = string.Empty();
    public BackgroundDto Background { get; set; } = new();
    public string BackgroundInstanceId { get; set; } = string.Empty();
    public SpeciesDto Species { get; set; } = new();
    public string SpeciesInstanceId { get; set; } = string.Empty();
    public List<AbilityScoreDto> Scores { get; set; } = new();
    public List<string> ScoreInstanceIds { get; set; } = new();
    public string PhysicalDescription { get; set; } = string.Empty();
    public string Personality { get; set; } = string.Empty();
    public string Ideals { get; set; } = string.Empty();
    public string Bonds { get; set; } = string.Empty();
    public string Flaws { get; set; } = string.Empty();
    public int ProficiencyBonus { get; set; } = 0;
    public List<int> Coins { get; set; } = new();
    public List<string> InventoryIds { get; set; } = new();
    public List<string> EquippedItemIds { get; set; } = new();
}