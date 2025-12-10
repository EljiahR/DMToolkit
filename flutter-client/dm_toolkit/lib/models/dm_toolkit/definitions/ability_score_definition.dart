import 'package:dm_toolkit/models/dm_toolkit/definitions/skill_definition.dart';

class AbilityScoreDefinition {
  String id;
  String name;
  String abbreviation;
  String description;
  List<SkillDefinition> skillDefinitions;

  AbilityScoreDefinition({
    required this.id,
    required this.name,
    required this.abbreviation,
    required this.description,
    required this.skillDefinitions
  });

  factory AbilityScoreDefinition.fromJson(Map<String, dynamic> json) {
    
    
    return AbilityScoreDefinition(
      id: json['id'], 
      name: json['name'], 
      abbreviation: json['abbreviation'], 
      description: json['description'], 
      skillDefinitions: 
    );
  }
}