import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';

class FeatGroupLevel {
  int level;
  int group;
  List<FeatDefinition> featDefinitions;

  FeatGroupLevel({
    required this.level,
    required this.group,
    required this.featDefinitions
  });

  factory FeatGroupLevel.fromJson(Map<String, dynamic> json, List<FeatDefinition> featDefinitions) {
    try {
      var featDefinitionIdListJson = json['featDefinitionIds'] as List;
      var featDefinitionIds = featDefinitionIdListJson
        .map((featDefinitionIdJson) => featDefinitionIdJson as String)
        .toList();
      var selectedFeatDefinitions = featDefinitions
        .where((featDefinition) => featDefinitionIds.contains(featDefinition.id))
        .toList();

      return FeatGroupLevel(
        level: json['level'] as int, 
        group: json['group'] as int, 
        featDefinitions: selectedFeatDefinitions
      );
    } catch (e) {
      throw FormatException('FeatGroupLevel model was invalid.', e);
    }
  }
}