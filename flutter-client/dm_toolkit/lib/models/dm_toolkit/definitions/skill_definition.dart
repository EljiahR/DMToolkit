import 'package:dm_toolkit/models/dm_toolkit/definitions/definition_interface.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/skill_instance.dart';

class SkillDefinition implements IDefinition {
  @override
  final String id;
  @override
  final String name;
  @override
  final String description;

  SkillDefinition({
    required this.id,
    required this.name,
    required this.description
  });

  factory SkillDefinition.fromJson(Map<String, dynamic> json) {
    try {
      return SkillDefinition(
        id: json['id'] as String, 
        name: json['name'] as String,
        description: json['description'] as String,
      );
    } catch (e) {
      throw FormatException("SkillDefinition model invalid.", e);
    }
  }

  SkillInstance generateBlankInstance() {
    return SkillInstance(
      definition: this
    );
  }
}