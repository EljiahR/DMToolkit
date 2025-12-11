import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';

class FeatDefinitionEffectGrouping {
  int group;
  List<Effect> effects;

  FeatDefinitionEffectGrouping({
    required this.group,
    required this.effects
  });

  factory FeatDefinitionEffectGrouping.fromJson(Map<String, dynamic> json, List<Effect> effects) {
    try {
      var effectIdListJson = json['effectIds'] as List;
      var effectIdList = effectIdListJson
        .map((effectIdJson) => effectIdJson as String)
        .toList();

      return FeatDefinitionEffectGrouping(
        group: json['group'] as int, 
        effects: effects.where((effect) => effectIdList.contains(effect.id)).toList()
      );
    } catch (e) {
      throw FormatException('FeatDefinitionEffectGrouping model invalid');
    }
  }
}