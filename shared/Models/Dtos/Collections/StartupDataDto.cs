using SharedModels.Models.Dtos.Definitions;
using SharedModels.Models.Dtos.Entities;
using SharedModels.Models.Dtos.Items.Bases;

namespace SharedModels.Models.Dtos.Collections;

public class StartupDataDto
{
    public List<AbilityScoreDefinitionDto> AbilityScoreDefinitions { get; set; } = new();
    public List<BackgroundDefinitionDto> BackgroundDefinitions { get; set; } = new();
    public List<CharacterClassDefinitionDto> CharacterClassDefinitions { get; set; } = new();
    public List<EffectDto> Effects { get; set; } = new();
    public List<FeatDefinitionDto> FeatDefinitions { get; set; } = new();
    public List<ItemDefinitionBaseDto> ItemDefinitionBases { get; set; } = new();
    public List<SchoolDto> Schools { get; set; } = new();
    public List<SpeciesDefinitionDto> SpeciesDefinitions { get; set; } = new();
    public List<SpellDto> Spells { get; set; } = new();
}