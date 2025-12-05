using SharedModels.Models.Dtos.Items.Bases;
using SharedModels.Models.Dtos.Joins;

namespace SharedModels.Models.Dtos.Instances;

public class CharacterDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Alignment { get; set; } = string.Empty;
    public int Hp { get; set; } = 0;
    public int TempHp { get; set; } = 0;
    public CharacterClassInstanceDto? PrimaryCharacterClassInstanceDto { get; set; } = new();
    public CharacterClassInstanceDto? SecondaryCharacterClassInstanceDto { get; set; } = new();
    public CharacterClassInstanceDto? TertiaryCharacterClassInstanceDto { get; set; } = new();
    public BackgroundInstanceDto? BackgroundInstance { get; set; } = new();
    public SpeciesInstanceDto? SpeciesInstance { get; set; } = new();
    public List<AbilityScoreInstanceDto> ScoreInstances { get; set; } = new();
    public string PhysicalDescription { get; set; } = string.Empty;
    public string Personality { get; set; } = string.Empty;
    public string Ideals { get; set; } = string.Empty;
    public string Bonds { get; set; } = string.Empty;
    public string Flaws { get; set; } = string.Empty;
    public WorthDto Coins { get; set; } = new();
    public List<ItemInstanceBaseDto> Inventory { get; set; } = new();
    public List<CharacterSpellDto> CharacterSpells { get; set; } = new();
}