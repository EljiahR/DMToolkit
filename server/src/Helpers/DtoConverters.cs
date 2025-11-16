using DMToolkit.API.Models.DMToolkitModels.Collections;
using DMToolkit.API.Models.DMToolkitModels.Definitions;
using DMToolkit.API.Models.DMToolkitModels.Entities;
using DMToolkit.API.Models.DMToolkitModels.Instances;
using DMToolkit.API.Models.DMToolkitModels.Items.Bases;
using DMToolkit.API.Models.DMToolkitModels.Items.Definitions;
using DMToolkit.API.Models.DMToolkitModels.Items.Instances;
using DMToolkit.API.Models.DMToolkitModels.JoinTables;
using SharedModels.Models.Dtos.Collections;
using SharedModels.Models.Dtos.Definitions;
using SharedModels.Models.Dtos.Entities;
using SharedModels.Models.Dtos.Instances;
using SharedModels.Models.Dtos.Items.Bases;
using SharedModels.Models.Dtos.Items.Definitions;
using SharedModels.Models.Dtos.Items.Instances;
using SharedModels.Models.Dtos.Joins;

namespace DMToolkit.API.Helpers;

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
            Spells = startupData.Spells.Select(ConvertSpell).ToList(),
            ItemDefinitionBases = startupData.ItemDefinitionBases.Select(ConvertItemDefinitionBase).ToList()
        };
    }

    private static SkillDefinitionDto ConvertSkillDefinition(SkillDefinition skill)
    {
        return new()
        {
            Id = skill.Id,
            Name = skill.Name,
            Description = skill.Description
        };
    }
    private static AbilityScoreDefinitionDto ConvertAbilityScoreDefinition(AbilityScoreDefinition abilityScore)
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
    private static BackgroundDefinitionDto ConvertBackgroundDefinition(BackgroundDefinition background)
    {
        return new()
        {
            Id = background.Id,
            Name = background.Name,
            Description = background.Description,
            AbilityScoreDefinitionIds = background.AbilityScoreDefinitions.Select(a => a.Id).ToList(),
            FeatDefinitionId = background.FeatDefinitionId,
            SkillDefinitionIds = background.SkillDefinitions.Select(s => s.Id).ToList(),
            ItemDefinitionBaseQuantities = background.BackgroundDefinitionItemDefinitionBases.Select(a => new ItemDefinitionBaseQuantity { ItemDefinitionBaseId = a.ItemDefinitionBaseId, Quantity = a.Quantity }).ToList(),
            StartingGp = background.StartingGp
        };
    }
    private static List<FeatGroupLevelDto> ConvertFeatTables(IEnumerable<IClassFeat> featTables)
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
    private static SubclassDefinitionDto ConvertSubclassDefinition(SubclassDefinition subclass)
    {
        return new()
        {
            Id = subclass.Id,
            Name = subclass.Name,
            Description = subclass.Description,
            FeatTables = ConvertFeatTables(subclass.SubclassDefinitionFeatDefinitions)
        };
    }
    private static CharacterClassDefinitionDto ConvertCharacterClassDefinition(CharacterClassDefinition characterClass)
    {
        return new()
        {
            Id = characterClass.Id,
            Name = characterClass.Name,
            Description = characterClass.Description,
            HitDie = characterClass.HitDie,
            FixedHp = characterClass.FixedHp,
            SubclassDefinitions = characterClass.SubclassDefinitions.Select(ConvertSubclassDefinition).ToList(),
            FeatTables = ConvertFeatTables(characterClass.CharacterClassDefinitionFeatDefinitions),
            ItemDefinitionBaseQuantities = characterClass.CharacterClassDefinitionItemDefinitionBases.Select(a => new ItemDefinitionBaseQuantity {ItemDefinitionBaseId = a.ItemDefinitionBaseId, Quantity = a.Quantity }).ToList(),
            StartingGp = characterClass.StartingGp,
            DefaultStr = characterClass.DefaultStr,
            DefaultDex = characterClass.DefaultDex,
            DefaultCon = characterClass.DefaultCon,
            DefaultInt = characterClass.DefaultInt,
            DefaultWis = characterClass.DefaultWis,
            DefaultCha = characterClass.DefaultCha
        };
    }
    private static List<FeatDefinitionEffectGroupingDto> ConvertFeatDefinitionFeatEffectJoinTable(IEnumerable<FeatDefinitionEffect> joinTables)
    {
        return joinTables.GroupBy(j => j.Group)
                            .Select(g => new FeatDefinitionEffectGroupingDto
                            {
                                Group = g.First().Group,
                                EffectIds = g.Select(t => t.EffectId).ToList()
                            })
                            .ToList();
    }
    private static FeatDefinitionDto ConvertFeat(FeatDefinition feat)
    {
        return new()
        {
            Id = feat.Id,
            Name = feat.Name,
            Description = feat.Description,
            AvailableEffectTables = ConvertFeatDefinitionFeatEffectJoinTable(feat.FeatDefinitionEffects)
        };
    }
    private static LineageDefinitionDto ConvertLineage(LineageDefinition lineage)
    {
        return new()
        {
            Id = lineage.Id,
            Name = lineage.Name,
            Description = lineage.Description,
            FeatDefinitionIds = lineage.FeatDefinitions.Select(f => f.Id).ToList()
        };
    }
    private static SpeciesDefinitionDto ConvertSpecies(SpeciesDefinition species)
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
    private static EffectDto ConvertFeatEffect(Effect effect)
    {
        return new()
        {
            Id = effect.Id,
            DataType = effect.DataType,
            OriginType = effect.OriginType,
            Title = effect.Title,
            Description = effect.Description,
            Data = effect.Data
        };
    }
    private static SchoolDto ConvertSchool(School school)
    {
        return new()
        {
            Id = school.Id,
            Name = school.Name
        };
    }
    private static List<SpellItemDto> ConvertSpellItemBaseJoinTable(IEnumerable<SpellItem> spellItems)
    {
        return spellItems.Select(s => new SpellItemDto
        {
            ItemId = s.ItemId,
            AmountRequired = s.AmountRequired
        }).ToList();
    }
    private static SpellDto ConvertSpell(Spell spell)
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

    private static ItemDefinitionBaseDto ConvertItemDefinitionBase(ItemDefinitionBase itemBase)
    {
        ItemDefinitionBaseDto itemDto;

        switch (itemBase.ItemType)
        {
            case "Weapon":
                var weapon = (itemBase as WeaponDefinition)!;
                itemDto = new WeaponDefinitionDto()
                {
                    DamageType = weapon.DamageType,
                    NumberOfDice = weapon.NumberOfDice,
                    NumberOfSides = weapon.NumberOfSides,
                    IsMartial = weapon.IsMartial,
                    WeaponMasteryId = weapon.WeaponMasteryId,
                    WeaponPropertyIds = weapon.WeaponProperties.Select(e => e.Id).ToList()
                };
                break;
            case "Armor":
                var armor = (itemBase as ArmorDefinition)!;
                itemDto = new ArmorDefinitionDto()
                {
                    BaseAC = armor.BaseAC,
                    DexterityCap = armor.DexterityCap,
                    HasDexterityCap = armor.HasDexterityCap,
                    HasStealthDisadvantage = armor.HasStealthDisadvantage,
                    Don = armor.Don,
                    Doff = armor.Doff,
                    ArmorCategory = armor.ArmorCategory
                };
                break;
            default:
                itemDto = new ItemDefinitionDto();
                break;
                
        }

        itemDto.Id = itemBase.Id;
        itemDto.Name = itemBase.Name;
        itemDto.Description = itemBase.Description;
        itemDto.Weight = itemBase.Weight;
        itemDto.ItemType = itemBase.ItemType;
        itemDto.Worth = new()
        {
            Cp = itemBase.Cp,
            Sp = itemBase.Sp,
            Ep = itemBase.Ep,
            Gp = itemBase.Gp,
            Pp = itemBase.Pp
        };

        return itemDto;
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
            CharacterClassInstances = character.CharacterCharacterClassInstances.Select(ConvertCharacterCharacterClassInstance).ToList(),
            BackgroundInstance = character.BackgroundInstance != null ? ConvertBackgroundInstance(character.BackgroundInstance) : null,
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
            Inventory = character.ItemInstanceBases.Select(ConvertItemInstanceBase).ToList()
        };
    }

    private static SkillInstanceDto ConvertSkillInstance(SkillInstance skill)
    {
        return new()
        {
            Id = skill.Id,
            IsProficient = skill.IsProficient,
            DefinitionId = skill.DefinitionId
        };
    }

    private static AbilityScoreInstanceDto ConvertAbilityScoreInstance(AbilityScoreInstance score)
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

    private static FeatInstanceDto ConvertFeatInstance(FeatInstance feat)
    {
        return new()
        {
            Id = feat.Id,
            EffectIds = feat.FeatEffects.Select(e => e.Id).ToList(),
            DefinitionId = feat.DefinitionId
        };
    }

    private static SubclassInstanceDto? ConvertSubclassInstance(SubclassInstance? subclass)
    {
        if (subclass == null) return null;
        return new()
        {
            Id = subclass.Id,
            FeatInstances = subclass.FeatInstances.Select(ConvertFeatInstance).ToList(),
            DefinitionId = subclass.DefinitionId
        };
    }

    private static CharacterClassInstanceDto ConvertCharacterCharacterClassInstance(CharacterCharacterClassInstance joinTable)
    {
        return new()
        {
            Id = joinTable.CharacterClassInstance.Id,
            Level = joinTable.Level,
            HpRolls = joinTable.HpRolls,
            FeatInstances = joinTable.CharacterClassInstance.FeatInstances.Select(ConvertFeatInstance).ToList(),
            SubclassInstance = ConvertSubclassInstance(joinTable.CharacterClassInstance.SubclassInstance),
            SelectedItemSet = joinTable.CharacterClassInstance.SelectedItemSet,
            DefinitionId = joinTable.CharacterClassInstance.DefinitionId
        };
    }

    private static BackgroundInstanceDto ConvertBackgroundInstance(BackgroundInstance background)
    {
        return new()
        {
            Id = background.Id,
            AbilityScoreDefinitionPlusTwoId = background.AbilityScoreDefinitionPlusTwoId,
            AbilityScoreDefinitionPlusOneId = background.AbilityScoreDefinitionPlusOneId,
            FeatInstance = background.FeatInstance != null ? ConvertFeatInstance(background.FeatInstance) : null,
            SelectedItemSet = background.SelectedItemSet,
            DefinitionId = background.DefinitionId
        };
    }

    // ItemInstanceBase Converters
    private static ItemInstanceBaseDto ConvertItemInstanceBase(ItemInstanceBase item)
    {
        var itemDto = new ItemInstanceDto()
        {
            Id = item.Id,
            ItemType = "Item",
            Quantity = item.Quantity,
            IsEquipped = item.IsEquipped,
            DefinitionId = item.DefinitionId
        };
        
        ItemInstanceBaseDto baseDto = itemDto;

        if (item is WeaponInstance)
        {
            WeaponInstanceDto weaponDto = (WeaponInstanceDto)baseDto;

            return weaponDto;
        }

        if (item is ArmorInstance)
        {
            ArmorInstanceDto armorDto = (ArmorInstanceDto)baseDto;

            return armorDto;
        }

        return itemDto;
    }
}