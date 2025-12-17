import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/definitions/ability_score_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/background_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/character_class_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/condition_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/lineage_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/skill_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/species_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/subclass_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/spell.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/ability_score_instance.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/background_instance.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/character_class_instance.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/condition_instance.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/species_instance.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_instance_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/worth.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/instances/armor_instance.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/instances/item_instance.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/instances/tool_instance.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/instances/weapon_instance.dart';
import 'package:dm_toolkit/models/dm_toolkit/join_tables/character_spell.dart';

class Character {
  final String id;
  final String name;
  final String alignment;
  final int hp;
  final int tempHp;
  final CharacterClassInstance? primaryCharacterClassInstance;
  final CharacterClassInstance? secondaryCharacterClassInstance;
  final CharacterClassInstance? tertiaryCharacterClassInstance;
  final BackgroundInstance? backgroundInstance;
  final SpeciesInstance? speciesInstance;
  final List<AbilityScoreInstance> scoreInstances;
  final String physicalDescription;
  final String personality;
  final String ideals;
  final String bonds;
  final String flaws;
  final Worth coins;
  final List<ItemInstanceBase> inventory;
  final List<CharacterSpell> characterSpells;
  final List<ConditionInstance> conditionInstances;

  Character({
    this.id = '',
    this.name = '',
    this.alignment = '',
    this.hp = 1,
    this.tempHp = 0,
    this.primaryCharacterClassInstance,
    this.secondaryCharacterClassInstance,
    this.tertiaryCharacterClassInstance,
    this.backgroundInstance,
    this.speciesInstance,
    List<AbilityScoreInstance>? scoreInstances,
    this.physicalDescription = '',
    this.personality = '',
    this.ideals = '',
    this.bonds = '',
    this.flaws = '',
    Worth? coins,
    List<ItemInstanceBase>? inventory,
    List<CharacterSpell>? characterSpells,
    List<ConditionInstance>? conditionInstances
  }) : scoreInstances = scoreInstances ?? [],
       coins = coins ?? Worth(),
       inventory = inventory ?? [],
       characterSpells = characterSpells ?? [],
       conditionInstances = conditionInstances ?? [];

  factory Character.fromJson(Map<String, dynamic> json, List<FeatDefinition> featDefinitions, List<Effect> effects, List<CharacterClassDefinition> characterClassDefinitions, List<SubclassDefinition> subclassDefinitions, List<AbilityScoreDefinition> abilityScoreDefinitions, List<BackgroundDefinition> backgroundDefinitions, List<SpeciesDefinition> speciesDefinitions, List<LineageDefinition> lineageDefinitions, List<SkillDefinition> skillDefinitions, List<Spell> spells, List<ConditionDefinition> conditionDefinitions, List<ItemDefinitionBase> itemDefinitionBases) {
    try {
      var primaryCharacterClassInstanceJson = json['primaryCharacterClassInstance'] as Map<String, dynamic>?;
      var primaryCharacterClassInstance = primaryCharacterClassInstanceJson != null ? CharacterClassInstance.fromJson(primaryCharacterClassInstanceJson, featDefinitions, effects, subclassDefinitions, characterClassDefinitions) : null;

      var secondaryCharacterClassInstanceJson = json['secondaryCharacterClassInstance'] as Map<String, dynamic>?;
      var secondaryCharacterClassInstance = secondaryCharacterClassInstanceJson != null ? CharacterClassInstance.fromJson(secondaryCharacterClassInstanceJson, featDefinitions, effects, subclassDefinitions, characterClassDefinitions) : null;

      var tertiaryCharacterClassInstanceJson = json['tertiaryCharacterClassInstance'] as Map<String, dynamic>?;
      var tertiaryCharacterClassInstance = tertiaryCharacterClassInstanceJson != null ? CharacterClassInstance.fromJson(tertiaryCharacterClassInstanceJson, featDefinitions, effects, subclassDefinitions, characterClassDefinitions) : null;

      var backgroundInstanceJson = json['backgroundInstance'] as Map<String, dynamic>?;
      var backgroundInstance = backgroundInstanceJson != null ? BackgroundInstance.fromJson(backgroundInstanceJson, abilityScoreDefinitions, effects, featDefinitions, backgroundDefinitions) : null;

      var speciesInstanceJson = json['speciesInstance'] as Map<String, dynamic>?;
      var speciesInstance = speciesInstanceJson != null ? SpeciesInstance.fromJson(speciesInstanceJson, featDefinitions, effects, speciesDefinitions, lineageDefinitions) : null;

      var scoreInstanceListJson = json['scoreInstances'] as List;
      var scoreInstances = scoreInstanceListJson
        .map((scoreInstanceJson) => AbilityScoreInstance.fromJson(scoreInstanceJson, abilityScoreDefinitions, skillDefinitions))
        .toList();

      var worthJson = json['coins'] as Map<String, dynamic>;
      var coins = Worth.fromJson(worthJson);

      var inventoryListJson = json['inventory'] as List;
      var inventory = inventoryListJson
        .map((itemBaseJson) {
          switch ((itemBaseJson as Map<String, dynamic>)['itemType'] as String) {
            case 'Weapon':
              return WeaponInstance.fromJson(itemBaseJson, itemDefinitionBases);
            case 'Armor':
              return ArmorInstance.fromJson(itemBaseJson, itemDefinitionBases);
            case 'Tool':
              return ToolInstance.fromJson(itemBaseJson, itemDefinitionBases);
            default:
              return ItemInstance.fromJson(itemBaseJson, itemDefinitionBases);
          }
        })
        .toList();

      var characterSpellListJson = json['characterSpells'] as List;
      var characterSpells = characterSpellListJson
        .map((characterSpellJson) => CharacterSpell.fromJson(characterSpellJson, spells))
        .toList();

      var conditionInstanceListJson = json['conditionInstances'] as List;
      var conditionInstances = conditionInstanceListJson
        .map((conditionInstanceJson) => ConditionInstance.fromJson(conditionInstanceJson, conditionDefinitions))
        .toList();

      return Character(
        id: json['id'] as String,
        name: json['name'] as String,
        alignment: json['alignment'] as String,
        hp: json['hp'] as int,
        tempHp: json['tempHp'] as int,
        primaryCharacterClassInstance: primaryCharacterClassInstance,
        secondaryCharacterClassInstance: secondaryCharacterClassInstance,
        tertiaryCharacterClassInstance: tertiaryCharacterClassInstance,
        backgroundInstance: backgroundInstance,
        speciesInstance: speciesInstance,
        scoreInstances: scoreInstances,
        physicalDescription: json['physicalDescription'] as String,
        personality: json['personality'] as String,
        ideals: json['ideals'] as String,
        bonds: json['bonds'] as String,
        flaws: json['flaws'] as String,
        coins: coins,
        inventory: inventory,
        characterSpells: characterSpells,
        conditionInstances:  conditionInstances 
      );
    } on StateError catch (e) {
      log('Definition for an instance was not found', error: e);
      rethrow;
    } on FormatException catch (e) {
      log('An instance model was invalid.', error: e);
      rethrow;
    } catch (e) {
      throw FormatException('Character model is invalid.', e);
    }
  }
}