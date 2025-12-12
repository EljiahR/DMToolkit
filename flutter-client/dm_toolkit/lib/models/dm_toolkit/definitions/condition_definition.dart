import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';

class ConditionDefinition {
  String id;
  String name;
  String description;
  bool isDebuff;
  String duration;
  List<Effect> effects;

  ConditionDefinition({
    required this.id,
    required this.name,
    required this.description,
    required this.isDebuff,
    required this.duration,
    required this.effects
  });

  factory ConditionDefinition.fromJson(Map<String, dynamic> json, List<Effect> effects) {
    var effectIdListJson = json['effectIds'] as List;
    var effectList = effectIdListJson
      .map((effectIdJson) {
        var effectId = effectIdJson as String;
        return effects.firstWhere((effect) => effect.id == effectId);
      })
      .toList();
    
    return ConditionDefinition(
      id: json['id'] as String, 
      name: json['name'] as String,
      description: json['description'] as String, 
      isDebuff: json['isDebuff'] as bool, 
      duration: json['duration'] as String, 
      effects: effectList
    );
  }
}