import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/definitions/ability_score_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/skill_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/skill_instance.dart';

class AbilityScoreInstance {
  final String id;
  final int score;
  final bool isProficient;
  final List<SkillInstance> skillInstances;
  final AbilityScoreDefinition definition;

  AbilityScoreInstance({
    this.id = '',
    this.score = 0,
    this.isProficient = false,
    List<SkillInstance>? skillInstances,
    required this.definition
  }) : skillInstances = skillInstances ?? [];

  factory AbilityScoreInstance.fromJson(Map<String, dynamic> json, List<AbilityScoreDefinition> abilityScoreDefinitions, List<SkillDefinition> skillDefinitions) {
    try {
      var skillInstanceListJson = json['skillInstances'] as List;
      var skillInstances = skillInstanceListJson
        .map((skillInstanceJson) => SkillInstance.fromJson(skillInstanceJson, skillDefinitions))
        .toList();

      var definitionId = json['definitionId'] as String;
      var definition = abilityScoreDefinitions.firstWhere((score) => score.id == definitionId);

      return AbilityScoreInstance(
        id: json['id'] as String, 
        score: json['score'] as int, 
        isProficient: json['isProficient'] as bool, 
        skillInstances: skillInstances, 
        definition: definition
      );
    } on StateError catch(e) {
      log('DefinitionId did not match any current AbilityScoreDefinition ids.', error: e);
      rethrow;
    }catch (e) {
      throw FormatException('AbilityScoreInstance model is invalid.', e);
    }
  }
}