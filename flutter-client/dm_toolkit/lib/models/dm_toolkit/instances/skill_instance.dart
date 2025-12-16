import 'package:dm_toolkit/models/dm_toolkit/definitions/skill_definition.dart';
import 'dart:math';

class SkillInstance {
  String id;
  bool isProficient;
  SkillDefinition definition;

  SkillInstance({
    required this.id,
    required this.isProficient,
    required this.definition
  });

  factory SkillInstance.fromJson() {
    try {

    } catch (e) {
      throw FormatException('SkillIsntance mode is invalid', e);
    }
  }
}