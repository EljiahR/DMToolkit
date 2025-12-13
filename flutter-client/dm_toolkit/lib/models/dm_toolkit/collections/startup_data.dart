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
  List<AbilityScoreDefinition> abilityScoreDefinitions;
  List<BackgroundDefinition> backgroundDefinitions;
  List<CharacterClassDefinition> characterClassDefinitions;
  List<ConditionDefinition> conditionDefinitions;
  List<Effect> effects;
  List<FeatDefinition> featDefinitions;
  List<ItemDefinitionBase> itemDefinitionBases;
  List<School> schools;
  List<SpeciesDefinition> speciesDefinitions;
  List<Spell> spells;

  StartupData({
    required this.abilityScoreDefinitions,
    required this.backgroundDefinitions,
    required this.characterClassDefinitions,
    required this.conditionDefinitions,
    required this.effects,
    required this.featDefinitions,
    required this.itemDefinitionBases,
    required this.schools,
    required this.speciesDefinitions,
    required this.spells
  });

  factory StartupData.fromJson(Map<String, dynamic> json) {
    try {
      var abilityScoreDefinitionListJson = json['abilityScoreDefinitions'] as List;
      var abilityScoreDefinitions = abilityScoreDefinitionListJson
        .map((abilityScoreDefinitionJson) => AbilityScoreDefinition.fromJson(abilityScoreDefinitionJson))
        .toList();
      
      var skillDefinitions = abilityScoreDefinitions.fold(<SkillDefinition>[], (skillList, abilityScoreDefinition) => [...skillList, ...abilityScoreDefinition.skillDefinitions]);

      var effectListJson = json['effects'];
      var effects = effectListJson
        .map((effect) => Effect.fromJson(effect))
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

      var backgroundDefinitionListJson = ['backgroundDefinitions'] as List;
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
    } catch (e) {
      throw FormatException('StartupData model is invalid.', e);
    }
  }
}