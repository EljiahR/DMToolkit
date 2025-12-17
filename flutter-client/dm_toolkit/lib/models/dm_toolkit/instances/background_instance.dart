import 'dart:developer';

import 'package:collection/collection.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/ability_score_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/background_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/feat_instance.dart';

class BackgroundInstance {
  final String id;
  final AbilityScoreDefinition? abilityScoreDefinitionPlusTwo;
  final AbilityScoreDefinition? abililyScoreDefinitionPlusOne;
  final FeatInstance? featInstance;
  final bool selectedItemSet;
  final BackgroundDefinition definition;

  BackgroundInstance({
    this.id = '',
    this.abilityScoreDefinitionPlusTwo,
    this.abililyScoreDefinitionPlusOne,
    this.featInstance,
    this.selectedItemSet = true,
    required this.definition
  });

  factory BackgroundInstance.fromJson(Map<String, dynamic> json, List<AbilityScoreDefinition> abilityScoreDefinitions, List<Effect> effects, List<FeatDefinition> featDefinitions, List<BackgroundDefinition> backgroundDefinitions) {
    try {
      var abilityScoreDefinitionPlusTwoId = json['abilityScoreDefinitionPlusTwoId'] as String;
      var abilityScoreDefinitionPlusTwo = abilityScoreDefinitions.firstWhereOrNull((score) => score.id == abilityScoreDefinitionPlusTwoId);

      var abilityScoreDefinitionPlusOneId = json['abilityScoreDefinitionPlusOneId'] as String;
      var abilityScoreDefinitionPlusOne = abilityScoreDefinitions.firstWhereOrNull((score) => score.id == abilityScoreDefinitionPlusOneId);

      var featInstanceJson = json['featInstance'] as Map<String, dynamic>?;
      var featInstance = featInstanceJson != null ? FeatInstance.fromJson(json['featInstance'], effects, featDefinitions) : null;

      var definitionId = json['definitionId'] as String;
      var definition = backgroundDefinitions.firstWhere((background) => background.id == definitionId);

      return BackgroundInstance(
        id: json['id'],
        abilityScoreDefinitionPlusTwo: abilityScoreDefinitionPlusTwo,
        abililyScoreDefinitionPlusOne: abilityScoreDefinitionPlusOne,
        featInstance: featInstance,
        selectedItemSet: json['selectedItemSet'] as bool,
        definition: definition
      );
    }  on StateError catch(e) {
      log('DefinitionId did not match any current FeatDefinition ids.', error: e);
      rethrow;
    } catch (e) {
      throw FormatException('BackgroundInstance model is invalid.', e);
    }
  }
}