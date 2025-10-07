using DMToolkit.Models.Collections;
using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;
using DMToolkit.Shared.Models.Dtos.Collections;
using DMToolkit.Shared.Models.Dtos.Definitions;
using DMToolkit.Shared.Models.Dtos.Entities;

namespace DMToolkit.Helpers;

public static class DtoConverters
{
    public static StartupDataDto ConvertStartupData(StartupData startupData)
    {
        return new StartupDataDto
        {
            AbilityScoreDefinitions = startupData.AbilityScoreDefinitions.Select(ConvertAbilityScoreDefinition).ToList(),
            BackgroundDefinitions = startupData.BackgroundDefinitions.Select(ConvertBackgroundDefinition).ToList(),
            CharacterClassDefinitions = startupData.CharacterClassDefinitions.Select(ConvertCharacterClassDefinition).ToList(),
            Feats = startupData.Feats.Select(ConvertFeat).ToList(),
            Species = startupData.Species.Select(ConvertSpecies).ToList(),
            FeatEffects = startupData.FeatEffects.Select(ConvertFeatEffect).ToList(),
            Schools = startupData.Schools.Select(ConvertSchool).ToList(),
            Spells = startupData.Spells.Select(ConvertSpell).ToList(),
            SpellEffects = startupData.SpellEffects.Select(ConvertSpellEffect).ToList()
        };
    }

    public static AbilityScoreDefinitionDto ConvertAbilityScoreDefinition(AbilityScoreDefinition abilityScore)
    {
        return new() { };
    }
    public static BackgroundDefinitionDto ConvertBackgroundDefinition(BackgroundDefinition background)
    {
        return new() { };
    }
    public static CharacterClassDefinitionDto ConvertCharacterClassDefinition(CharacterClassDefinition characterClass)
    {
        return new() { };
    }
    public static FeatDefinitionDto ConvertFeat(FeatDefinition feat)
    {
        return new() { };
    }
    public static SpeciesDefinitionDto ConvertSpecies(SpeciesDefinition species)
    {
        return new() { };
    }
    public static FeatEffectDto ConvertFeatEffect(FeatEffect featEffect)
    {
        return new() { };
    }
    public static SchoolDto ConvertSchool(School school)
    {
        return new() { };
    }
    public static SpellDto ConvertSpell(Spell spell)
    {
        return new() { };
    }
    public static SpellEffectDto ConvertSpellEffect(SpellEffect spellEffect)
    {
        return new() { };
    }
}