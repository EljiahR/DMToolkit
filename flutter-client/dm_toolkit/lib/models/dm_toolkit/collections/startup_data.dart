import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/definitions/ability_score_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/background_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/character_class_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/condition_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/skill_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/species_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/school.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/spell.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/definitions/armor_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/definitions/item_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/definitions/tool_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/definitions/weapon_definition.dart';

class StartupData {
  final List<AbilityScoreDefinition> abilityScoreDefinitions;
  final List<BackgroundDefinition> backgroundDefinitions;
  final List<CharacterClassDefinition> characterClassDefinitions;
  final List<ConditionDefinition> conditionDefinitions;
  final List<Effect> effects;
  final List<FeatDefinition> featDefinitions;
  final List<ItemDefinitionBase> itemDefinitionBases;
  final List<School> schools;
  final List<SpeciesDefinition> speciesDefinitions;
  final List<Spell> spells;

  static const List<AbilityScoreDefinition> defaultAbilityScoreDefinitions = [];
  static const List<BackgroundDefinition> defaultBackgroundDefinitions = [];
  static const List<CharacterClassDefinition> defaultCharacterClassDefinitions = [];
  static const List<ConditionDefinition> defaultConditionDefinitions = [];
  static const List<Effect> defaultEffects = [];
  static const List<FeatDefinition> defaultFeatDefinitions = [];
  static const List<ItemDefinitionBase> defaultItemDefinitionBases = [];
  static const List<School> defaultSchools = [];
  static const List<SpeciesDefinition> defaultSpeciesDefinitions = [];
  static const List<Spell> defaultSpells = [];

  StartupData({
    this.abilityScoreDefinitions = defaultAbilityScoreDefinitions,
    this.backgroundDefinitions = defaultBackgroundDefinitions,
    this.characterClassDefinitions = defaultCharacterClassDefinitions,
    this.conditionDefinitions = defaultConditionDefinitions,
    this.effects = defaultEffects,
    this.featDefinitions = defaultFeatDefinitions,
    this.itemDefinitionBases = defaultItemDefinitionBases,
    this.schools = defaultSchools,
    this.speciesDefinitions = defaultSpeciesDefinitions,
    this.spells = defaultSpells
  });

  factory StartupData.fromJson(Map<String, dynamic> json) {
    try {
      var abilityScoreDefinitionListJson = json['abilityScoreDefinitions'] as List;
      var abilityScoreDefinitions = abilityScoreDefinitionListJson
        .map((abilityScoreDefinitionJson) => AbilityScoreDefinition.fromJson(abilityScoreDefinitionJson))
        .toList();
      
      var skillDefinitions = abilityScoreDefinitions.fold(<SkillDefinition>[], (skillList, abilityScoreDefinition) => [...skillList, ...abilityScoreDefinition.skillDefinitions]);

      var effectListJson = json['effects'] as List;
      var effects = effectListJson
        .map((effectJson) => Effect.fromJson(effectJson))
        .toList();

      var featDefinitionListJson = json['featDefinitions'] as List;
      var featDefinitions = featDefinitionListJson
        .map((featDefinitionJson) => FeatDefinition.fromJson(featDefinitionJson, effects))
        .toList();

      var itemDefinitionBaseListJson = json['itemDefinitionBases'] as List;
      var itemDefinitionBases = itemDefinitionBaseListJson
        .map((itemDefinitionBaseJson) {
          switch (itemDefinitionBaseJson['itemType']) {
            case 'Weapon':
              return WeaponDefinition.fromJson(itemDefinitionBaseJson, effects);
            case 'Armor':
              return ArmorDefinition.fromJson(itemDefinitionBaseJson);
            case 'Tool':
              return ToolDefinition.fromJson(itemDefinitionBaseJson);
            default:
              return ItemDefinition.fromJson(itemDefinitionBaseJson);
          }
        })
        .toList();

      var backgroundDefinitionListJson = json['backgroundDefinitions'] as List;
      var backgroundDefinitions = backgroundDefinitionListJson
        .map((backgroundDefinitionJson) => BackgroundDefinition.fromJson(backgroundDefinitionJson, abilityScoreDefinitions, featDefinitions, skillDefinitions, itemDefinitionBases))
        .toList();

      var characterClassListJson = json['characterClassDefinitions'] as List;
      var characterClassDefinitions = characterClassListJson
        .map((characterClassJson) => CharacterClassDefinition.fromJson(characterClassJson, abilityScoreDefinitions, skillDefinitions, itemDefinitionBases, featDefinitions))
        .toList();

      var conditionListJson = json['conditionDefinitions'] as List;
      var conditionDefinitions = conditionListJson
        .map((conditionJson) => ConditionDefinition.fromJson(conditionJson, effects))
        .toList();

      var schoolJsonList = json['schools'] as List;
      var schools = schoolJsonList
        .map((schoolJson) => School.fromJson(schoolJson))
        .toList();

      var speciesListJson = json['speciesDefinitions'] as List;
      var speciesDefinitions = speciesListJson
        .map((speciesJson) => SpeciesDefinition.fromJson(speciesJson, featDefinitions))
        .toList();

      var spellListJson = json['spells'] as List;
      var spells = spellListJson
        .map((spellJson) => Spell.fromJson(spellJson, schools, characterClassDefinitions, itemDefinitionBases, effects))
        .toList();
      
      return StartupData(
        abilityScoreDefinitions: abilityScoreDefinitions,
        backgroundDefinitions: backgroundDefinitions,
        characterClassDefinitions: characterClassDefinitions,
        conditionDefinitions: conditionDefinitions,
        effects: effects,
        featDefinitions: featDefinitions, 
        itemDefinitionBases: itemDefinitionBases, 
        schools: schools, 
        speciesDefinitions: speciesDefinitions, 
        spells: spells
      );
    } on FormatException catch (e) {
      log('Error occured during StartupData json parse.', error: e);
      rethrow;
    }
     catch (e) {
      throw FormatException('JSON for StartupData model is invalid.', e);
    }
  }
}

extension MutableStartupData on StartupData {
  StartupData importFromJson(Map<String, dynamic> json) {
    try {
      var abilityScoreDefinitionListJson = json['abilityScoreDefinitions'] as List;
      var abilityScoreDefinitions = abilityScoreDefinitionListJson
        .map((abilityScoreDefinitionJson) => AbilityScoreDefinition.fromJson(abilityScoreDefinitionJson))
        .toList();
      
      var skillDefinitions = abilityScoreDefinitions.fold(<SkillDefinition>[], (skillList, abilityScoreDefinition) => [...skillList, ...abilityScoreDefinition.skillDefinitions]);

      var effectListJson = json['effects'] as List;
      var effects = effectListJson
        .map((effectJson) => Effect.fromJson(effectJson))
        .toList();

      var featDefinitionListJson = json['featDefinitions'] as List;
      var featDefinitions = featDefinitionListJson
        .map((featDefinitionJson) => FeatDefinition.fromJson(featDefinitionJson, effects))
        .toList();

      var itemDefinitionBaseListJson = json['itemDefinitionBases'] as List;
      var itemDefinitionBases = itemDefinitionBaseListJson
        .map((itemDefinitionBaseJson) {
          switch (itemDefinitionBaseJson['itemType']) {
            case 'Weapon':
              return WeaponDefinition.fromJson(itemDefinitionBaseJson, effects);
            case 'Armor':
              return ArmorDefinition.fromJson(itemDefinitionBaseJson);
            case 'Tool':
              return ToolDefinition.fromJson(itemDefinitionBaseJson);
            default:
              return ItemDefinition.fromJson(itemDefinitionBaseJson);
          }
        })
        .toList();

      var backgroundDefinitionListJson = json['backgroundDefinitions'] as List;
      var backgroundDefinitions = backgroundDefinitionListJson
        .map((backgroundDefinitionJson) => BackgroundDefinition.fromJson(backgroundDefinitionJson, abilityScoreDefinitions, featDefinitions, skillDefinitions, itemDefinitionBases))
        .toList();

      var characterClassListJson = json['characterClassDefinitions'] as List;
      var characterClassDefinitions = characterClassListJson
        .map((characterClassJson) => CharacterClassDefinition.fromJson(characterClassJson, abilityScoreDefinitions, skillDefinitions, itemDefinitionBases, featDefinitions))
        .toList();

      var conditionListJson = json['conditionDefinitions'] as List;
      var conditionDefinitions = conditionListJson
        .map((conditionJson) => ConditionDefinition.fromJson(conditionJson, effects))
        .toList();

      var schoolJsonList = json['schools'] as List;
      var schools = schoolJsonList
        .map((schoolJson) => School.fromJson(schoolJson))
        .toList();

      var speciesListJson = json['speciesDefinitions'] as List;
      var speciesDefinitions = speciesListJson
        .map((speciesJson) => SpeciesDefinition.fromJson(speciesJson, featDefinitions))
        .toList();

      var spellListJson = json['spells'] as List;
      var spells = spellListJson
        .map((spellJson) => Spell.fromJson(spellJson, schools, characterClassDefinitions, itemDefinitionBases, effects))
        .toList();
      
      return StartupData(
        abilityScoreDefinitions: [...this.abilityScoreDefinitions, ...abilityScoreDefinitions],
        backgroundDefinitions: [...this.backgroundDefinitions, ...backgroundDefinitions], 
        characterClassDefinitions: [...this.characterClassDefinitions, ...characterClassDefinitions], 
        conditionDefinitions: [...this.conditionDefinitions, ...conditionDefinitions], 
        effects: [...this.effects, ...effects], 
        featDefinitions: [...this.featDefinitions, ...featDefinitions], 
        itemDefinitionBases: [...this.itemDefinitionBases, ...itemDefinitionBases], 
        schools: [...this.schools, ...schools], 
        speciesDefinitions: [...this.speciesDefinitions, ...speciesDefinitions], 
        spells: [...this.spells, ...spells],
      );
      
      
    } on FormatException catch (e) {
      log('Error occured during StartupData json parse.', error: e);
      
    }
     catch (e) {
      log('JSON for StartupData model is invalid.', error: e);
    }

    return this;
  }
}