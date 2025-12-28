import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/definitions/skill_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/instance_interface.dart';

class SkillInstance implements IInstance<SkillDefinition> {
  final String id;
  final bool isProficient;

  @override
  final SkillDefinition definition;

  SkillInstance({
    this.id = '',
    this.isProficient = false,
    required this.definition
  });

  factory SkillInstance.fromJson(Map<String, dynamic> json, List<SkillDefinition> skillDefinitions) {
    try {
      var definitionId = json['definitionId'] as String;
      var definition = skillDefinitions.firstWhere((skill) => skill.id == definitionId);
      
      return SkillInstance(
        id: json['id'] as String,
        isProficient: json['isProficient'] as bool, 
        definition: definition
      );
    } on StateError catch(e) {
      log('DefinitionId did not match any current SkillDefinition ids.', error: e);
      rethrow;
    }
     catch (e) {
      throw FormatException('SkillInstance mode is invalid', e);
    }
  }
}