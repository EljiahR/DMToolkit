using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;

namespace DMToolkit.Models.Collections;

public class StartupData
{
    public List<AbilityScoreDefinition> AbilityScoreDefinitions { get; set; } = new();
    public List<BackgroundDefinition> BackgroundDefinitions { get; set; } = new();
    public List<CharacterClassDefinition> CharacterClassDefinitions { get; set; } = new();
    public List<FeatDefinition> Feats { get; set; } = new();
    public List<SpeciesDefinition> Species { get; set; } = new();
    public List<FeatEffect> FeatEffects { get; set; } = new();
    public List<School> Schools { get; set; } = new();
    public List<Spell> Spells { get; set; } = new();
    public List<SpellEffect> SpellEffects { get; set; } = new();
}