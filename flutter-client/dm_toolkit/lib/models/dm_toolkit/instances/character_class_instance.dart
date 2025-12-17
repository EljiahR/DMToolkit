import 'dart:developer';

import 'package:dm_toolkit/helpers/json_list_to_primitive.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/character_class_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/subclass_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/feat_instance.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/subclass_instance.dart';

class CharacterClassInstance {
  final String id;
  final int level;
  final List<int> hpRolls;
  final List<FeatInstance> featInstances;
  final SubclassInstance? subclassInstance;
  final bool selectedItemSet;
  final CharacterClassDefinition definition;

  CharacterClassInstance({
    this.id = '',
    this.level = 1,
    List<int>? hpRolls,
    List<FeatInstance>? featInstances,
    this.subclassInstance,
    this.selectedItemSet = true,
    required this.definition
  }) : hpRolls = hpRolls ?? [],
       featInstances = featInstances ?? [];

  factory CharacterClassInstance.fromJson(Map<String, dynamic> json, List<FeatDefinition> featDefinitions, List<Effect> effects, List<SubclassDefinition> subclassDefinitions, List<CharacterClassDefinition> characterClassDefinitions) {
    try {
      var hpRolls = jsonListToPrimitive<int>(json['hpRolls']);
      var featInstanceListJson = json['featInstances'] as List;
      var featInstances = featInstanceListJson
        .map((featInstanceJson) => FeatInstance.fromJson(featInstanceJson, effects, featDefinitions))
        .toList();
      
      var subclassInstanceJson = json['subclassInstance'] as Map<String, dynamic>?;
      var subclassInstance = subclassInstanceJson != null ? SubclassInstance.fromJson(subclassInstanceJson, effects, featDefinitions, subclassDefinitions) : null;
      
      var definitionId = json['definitionId'] as String;
      var definition = characterClassDefinitions.firstWhere((characterClass) => characterClass.id == definitionId);

      return CharacterClassInstance(
        id: json['id'] as String,
        level: json['level'] as int,
        hpRolls: hpRolls,
        featInstances: featInstances,
        subclassInstance: subclassInstance,
        selectedItemSet: json['selectedItemSet'] as bool,
        definition: definition
      );
    } on StateError catch (e) {
      log('DefinitionId did not match any existing CharacterClassDefinitions', error: e);
      rethrow;
    } catch (e) {
      throw FormatException('CharacterClassInstanct model is invalid.', e);
    }
  }
}