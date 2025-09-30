using DMToolkit.Models.Items.Bases;
using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Instances;

public class Character : WorthBase
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Alignment { get; set; } = string.Empty;
    public int Hp { get; set; } = 0;
    public int TempHp { get; set; } = 0;
    public List<CharacterCharacterClassInstance> CharacterCharacterClassInstances { get; set; } = new();
    public string BackgroundInstanceId { get; set; } = string.Empty;
    public BackgroundInstance? BackgroundInstance { get; set; } = null;
    public string SpeciesInstanceId { get; set; } = string.Empty;
    public SpeciesInstance? SpeciesInstance { get; set; } = null;
    public ICollection<AbilityScoreInstance> AbilityScoreInstances { get; set; } = new List<AbilityScoreInstance>();
    public string PhysicalDescription { get; set; } = string.Empty;
    public string Personality { get; set; } = string.Empty;
    public string Ideals { get; set; } = string.Empty;
    public string Bonds { get; set; } = string.Empty;
    public string Flaws { get; set; } = string.Empty;
    public int ProficiencyBonus { get; set; } = 0;
    public ICollection<CharacterItemBase> CharacterItemBases { get; set; } = new List<CharacterItemBase>();
    public ICollection<CharacterSpell> CharacterSpells { get; set; } = new List<CharacterSpell>();
}