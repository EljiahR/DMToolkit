import 'package:dm_toolkit/models/dm_toolkit/definitions/skill_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/ability_score_instance.dart';

class AbilityScoreDefinition {
  final String id;
  final String name;
  final String abbreviation;
  final String description;
  final List<SkillDefinition> skillDefinitions;

  AbilityScoreDefinition({
    required this.id,
    required this.name,
    required this.abbreviation,
    required this.description,
    required this.skillDefinitions
  });

  factory AbilityScoreDefinition.fromJson(Map<String, dynamic> json) {
    try {
      var skillDefinitionListJson = json['skillDefinitions'] as List;
      List<SkillDefinition> skillDefinitions = skillDefinitionListJson
        .map((skillDefinitionJson) => SkillDefinition.fromJson(skillDefinitionJson))
        .toList();
      
      return AbilityScoreDefinition(
        id: json['id'] as String, 
        name: json['name'] as String, 
        abbreviation: json['abbreviation'] as String, 
        description: json['description'] as String, 
        skillDefinitions: skillDefinitions
      );
    } catch (e) {
      throw FormatException("AbilityScoreDefinition model invalid.", e);
    }
  }

  AbilityScoreInstance generateBlankInstance({ String? id }) {
    var skillInstances = skillDefinitions
      .map((skillDefinition) => skillDefinition.generateBlankInstance())
      .toList();

    return AbilityScoreInstance(
      id: id ?? '',
      skillInstances: skillInstances,
      definition: this
    );
  }
}