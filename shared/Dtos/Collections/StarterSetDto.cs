using DMToolkit.Shared.Models.Dtos.Definitions;
using DMToolkit.Shared.Models.Dtos.Entities;

namespace DMToolkit.Shared.Models.Dtos.Collections;

public class StarterSetDto
{
    public List<AbilityScoreDefinitionDto> AbilityScoreDefinitions { get; set; } = new();
    public List<BackgroundDefinitionDto> BackgroundDefinitions { get; set; } = new();
    public List<CharacterClassDefinitionDto> CharacterClassDefinitions { get; set; } = new();
    public List<FeatDefinitionDto> Feats { get; set; } = new();
    public List<SpeciesDefinitionDto> Species { get; set; } = new();
    public List<FeatEffectDto> FeatEffects { get; set; } = new();
    public List<SchoolDto> Schools { get; set; } = new();
    public List<SpellDto> Spells { get; set; } = new();
    public List<SpellEffectDto> SpellEffects { get; set; } = new();
}