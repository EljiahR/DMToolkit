using DMToolkit.Shared.Models.Dtos.Definitions;
using DMToolkit.Shared.Models.Dtos.Entities;

namespace DMToolkit.Shared.Models.Dtos.Collections;

public class StartupDataDto
{
    public List<AbilityScoreDefinitionDto> AbilityScoreDefinitions { get; set; } = new();
    public List<BackgroundDefinitionDto> BackgroundDefinitions { get; set; } = new();
    public List<CharacterClassDefinitionDto> CharacterClassDefinitions { get; set; } = new();
    public List<FeatDefinitionDto> FeatDefinitions { get; set; } = new();
    public List<SpeciesDefinitionDto> SpeciesDefinitions { get; set; } = new();
    public List<EffectDto> Effects { get; set; } = new();
    public List<SchoolDto> Schools { get; set; } = new();
    public List<SpellDto> Spells { get; set; } = new();
}