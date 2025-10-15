using System.Text.Json;
using DMToolkit.Models.Collections;
using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;
using DMToolkit.Models.Instances;
using DMToolkit.Models.JoinTables;
using DMToolkit.Shared.Models.Dtos.Collections;
using DMToolkit.Shared.Models.Dtos.Definitions;
using DMToolkit.Shared.Models.Dtos.Entities;
using DMToolkit.Shared.Models.Dtos.Instances;
using DMToolkit.Shared.Models.Dtos.Joins;

namespace DMToolkit.Helpers;

public static class DtoConverters
{
    // Definitions
    public static StartupDataDto ConvertStartupData(StartupData startupData)
    {
        return new StartupDataDto
        {
            AbilityScoreDefinitions = startupData.AbilityScoreDefinitions.Select(ConvertAbilityScoreDefinition).ToList(),
            BackgroundDefinitions = startupData.BackgroundDefinitions.Select(ConvertBackgroundDefinition).ToList(),
            CharacterClassDefinitions = startupData.CharacterClassDefinitions.Select(ConvertCharacterClassDefinition).ToList(),
            FeatDefinitions = startupData.FeatDefinitions.Select(ConvertFeat).ToList(),
            SpeciesDefinitions = startupData.SpeciesDefinitions.Select(ConvertSpecies).ToList(),
            Effects = startupData.Effects.Select(ConvertFeatEffect).ToList(),
            Schools = startupData.Schools.Select(ConvertSchool).ToList(),
            Spells = startupData.Spells.Select(ConvertSpell).ToList()
        };
    }

    public static SkillDefinitionDto ConvertSkillDefinition(SkillDefinition skill)
    {
        return new()
        {
            Id = skill.Id,
            Name = skill.Name,
            Description = skill.Description
        };
    }
    public static AbilityScoreDefinitionDto ConvertAbilityScoreDefinition(AbilityScoreDefinition abilityScore)
    {
        return new()
        {
            Id = abilityScore.Id,
            Name = abilityScore.Name,
            Abbreviation = abilityScore.Abbreviation,
            Description = abilityScore.Description,
            SkillDefinitions = abilityScore.SkillDefinitions.Select(ConvertSkillDefinition).ToList()
        };
    }
    public static BackgroundDefinitionDto ConvertBackgroundDefinition(BackgroundDefinition background)
    {
        return new()
        {
            Id = background.Id,
            Name = background.Name,
            Description = background.Description,
            AbilityScoreDefinitionIds = background.AbilityScoreDefinitions.Select(a => a.Id).ToList(),
            FeatDefinitionId = background.FeatDefinitionId,
            SkillDefinitionIds = background.SkillDefinitions.Select(s => s.Id).ToList()
        };
    }
    public static List<FeatGroupLevelDto> ConvertFeatTables(IEnumerable<IClassFeat> featTables)
    {
        return featTables.GroupBy(t => new {t.Group, t.Level})
                        .Select(t => new FeatGroupLevelDto
                        {
                            FeatDefinitionIds = t.Select(f => f.FeatDefinitionId).ToList(),
                            Group = t.First().Group,
                            Level = t.First().Level
                        })
                        .ToList();
    }
    public static SubclassDefinitionDto ConvertSubclassDefintion(SubclassDefinition subclass)
    {
        return new()
        {
            Id = subclass.Id,
            Name = subclass.Name,
            Description = subclass.Description,
            FeatTables = ConvertFeatTables(subclass.SubclassDefinitionFeatDefinitions)
        };
    }
    public static CharacterClassDefinitionDto ConvertCharacterClassDefinition(CharacterClassDefinition characterClass)
    {
        return new()
        {
            Id = characterClass.Id,
            Name = characterClass.Name,
            Description = characterClass.Description,
            HitDie = characterClass.HitDie,
            FixedHp = characterClass.FixedHp,
            SubclassDefinitions = characterClass.SubclassDefinitions.Select(ConvertSubclassDefintion).ToList(),
            FeatTables = ConvertFeatTables(characterClass.CharacterClassDefinitionFeatDefinitions),
            ItemSetAIds = characterClass.CharacterClassDefinitionItemBases.Where(j => j.Group == 0).Select(a => a.ItemBaseId).ToList(),
            ItemSetBIds = characterClass.CharacterClassDefinitionItemBases.Where(j => j.Group == 1).Select(a => a.ItemBaseId).ToList(),
            DefaultStr = characterClass.DefaultStr,
            DefaultDex = characterClass.DefaultDex,
            DefaultCon = characterClass.DefaultCon,
            DefaultInt = characterClass.DefaultInt,
            DefaultWis = characterClass.DefaultWis,
            DefaultCha = characterClass.DefaultCha
        };
    }
    public static List<FeatDefinitionEffectGroupingDto> ConvertFeatDefinitionFeatEffectJoinTable(IEnumerable<FeatDefinitionEffect> joinTables)
    {
        return joinTables.GroupBy(j => j.Group)
                            .Select(g => new FeatDefinitionEffectGroupingDto
                            {
                                Group = g.First().Group,
                                EffectIds = g.Select(t => t.EffectId).ToList()
                            })
                            .ToList();
    }
    public static FeatDefinitionDto ConvertFeat(FeatDefinition feat)
    {
        return new()
        {
            Id = feat.Id,
            Name = feat.Name,
            Description = feat.Description,
            AvailableEffectTables = ConvertFeatDefinitionFeatEffectJoinTable(feat.FeatDefinitionEffects)
        };
    }
    public static LineageDefinitionDto ConvertLineage(LineageDefinition lineage)
    {
        return new()
        {
            Id = lineage.Id,
            Name = lineage.Name,
            Description = lineage.Description,
            FeatDefinitionIds = lineage.FeatDefinitions.Select(f => f.Id).ToList()
        };
    }
    public static SpeciesDefinitionDto ConvertSpecies(SpeciesDefinition species)
    {
        return new()
        {
            Id = species.Id,
            Name = species.Name,
            Description = species.Description,
            Type = species.Type,
            Speed = species.Speed,
            Sizes = species.Sizes,
            FeatDefinitionIds = species.FeatDefinitions.Select(f => f.Id).ToList(),
            LineageDefinitions = species.LineageDefinitions.Select(ConvertLineage).ToList()
        };
    }
    public static EffectDto ConvertFeatEffect(Effect effect)
    {
        return new()
        {
            Id = effect.Id,
            DataType = effect.DataType,
            Title = effect.Title,
            Description = effect.Description,
            Data = effect.Data
        };
    }
    public static SchoolDto ConvertSchool(School school)
    {
        return new()
        {
            Id = school.Id,
            Name = school.Name
        };
    }
    public static List<SpellItemDto> ConvertSpellItemBaseJoinTable(IEnumerable<SpellItem> spellItems)
    {
        return spellItems.Select(s => new SpellItemDto
        {
            ItemId = s.ItemId,
            AmountRequired = s.AmountRequired
        }).ToList();
    }
    public static SpellDto ConvertSpell(Spell spell)
    {
        return new()
        {
            Id = spell.Id,
            Name = spell.Name,
            Level = spell.Level,
            SchoolId = spell.School?.Id ?? "",
            CharacterClassIds = spell.CharacterClassDefinitions.Select(c => c.Id).ToList(),
            CastingTime = spell.CastingTime,
            Range = spell.Range,
            VerbalRequired = spell.VerbalRequired,
            SomaticRequired = spell.SomaticRequired,
            MaterialsRequired = spell.MaterialsRequired,
            MaterialRequirements = ConvertSpellItemBaseJoinTable(spell.SpellItems),
            Duration = spell.Duration,
            Description = spell.Description,
            EffectIds = spell.Effects.Select(e => e.Id).ToList()
        };
    }

    // Instances
    public static CharacterDto ConvertCharacter(Character character)
    {
        return new()
        {
            Id = character.Id,
            Name = character.Name,
            Alignment = character.Alignment,
            Hp = character.Hp,
            TempHp = character.TempHp,
            CharacterClassInstances = null,
            BackgroundInstance = null,
            SpeciesInstance = null,
            ScoreInstances = character.AbilityScoreInstances.Select(ConvertAbilityScoreInstance).ToList(),
            PhysicalDescription = character.PhysicalDescription,
            Personality = character.Personality,
            Ideals = character.Ideals,
            Bonds = character.Bonds,
            Flaws = character.Flaws,
            Coins = new()
            {
                Cp = character.Cp,
                Sp = character.Sp,
                Ep = character.Ep,
                Gp = character.Gp,
                Pp = character.Pp
            },
            Inventory = null
        };
    }

    public static SkillInstanceDto ConvertSkillInstance(SkillInstance skill)
    {
        return new()
        {
            Id = skill.Id,
            IsProficient = skill.IsProficient,
            DefinitionId = skill.DefinitionId
        };
    }

    public static AbilityScoreInstanceDto ConvertAbilityScoreInstance(AbilityScoreInstance score)
    {
        return new()
        {
            Id = score.Id,
            Score = score.Score,
            IsProficient = score.IsProficient,
            SkillInstances = score.SkillInstances.Select(ConvertSkillInstance).ToList(),
            DefinitionId = score.DefinitionId
        };
    }
    
    public static CharacterClassInstanceDto ConvertCharacterCharacterClassInstance(CharacterCharacterClassInstance joinTable)
    {
        return new()
        {
            Id = joinTable.CharacterClassInstance.Id,
            Level = joinTable.Level,
            HpRolls = joinTable.HpRolls,
            FeatInstances = null,
            SubclassInstance = null,
            DefinitionId = joinTable.CharacterClassInstance.DefinitionId
        };
    }
}