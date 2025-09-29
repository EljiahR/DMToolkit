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
    public BackgroundInstance? Background { get; set; } = null;
    public SpeciesInstance? Species { get; set; } = null;
    public ICollection<CharacterAbilityScoreInstance> CharacterAbilityScoreInstances { get; set; } = new List<CharacterAbilityScoreInstance>();
    public string PhysicalDescription { get; set; } = string.Empty;
    public string Personality { get; set; } = string.Empty;
    public string Ideals { get; set; } = string.Empty;
    public string Bonds { get; set; } = string.Empty;
    public string Flaws { get; set; } = string.Empty;
    public int ProficiencyBonus { get; set; } = 0;
    public ICollection<CharacterItemBase> CharacterItemBases { get; set; } = new List<CharacterItemBase>();
    public ICollection<CharacterSpell> CharacterSpells { get; set; } = new List<CharacterSpell>();
}