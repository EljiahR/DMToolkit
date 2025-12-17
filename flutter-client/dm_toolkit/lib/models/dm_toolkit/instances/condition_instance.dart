import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/definitions/condition_definition.dart';

class ConditionInstance {
  final String id;
  final String remainingDuration;
  final ConditionDefinition definition;

  ConditionInstance({
    this.id = '',
    this.remainingDuration = '',
    required this.definition
  });

  factory ConditionInstance.fromJson(Map<String, dynamic> json, List<ConditionDefinition> conditionDefinitions) {
    try {
      var definitionId = json['definitionId'] as String;
      var definition = conditionDefinitions.firstWhere((condition) => condition.id == definitionId);

      return ConditionInstance(
        id: json['id'],
        remainingDuration: json['remainingDuration'],
        definition: definition
      );
    } on StateError catch (e) {
      log('DefinitionId did not match any ConditionDefinitions.', error: e);
      rethrow;
    } catch (e) {
      throw FormatException('ConditionInstance model is invalid.', e);
    }
  }
}