import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/join_tables/feat_group_level.dart';

class SubclassDefinition {
  final String id;
  final String name;
  final String description;
  final List<FeatGroupLevel> featTables;

  SubclassDefinition({
    required this.id,
    required this.name,
    required this.description,
    required this.featTables
  });

  factory SubclassDefinition.fromJson(Map<String, dynamic> json, List<FeatDefinition> featDefinitions) {
    try {
      var featTableListJson = json['featTables'] as List;
      var featTables = featTableListJson
        .map((featTableJson) => FeatGroupLevel.fromJson(featTableJson, featDefinitions))
        .toList();
      
      return SubclassDefinition(
        id: json['id'] as String, 
        name: json['name'] as String, 
        description: json['description'] as String, 
        featTables: featTables
      );
    } catch (e) {
      throw FormatException('SubclassDefinition model is invalid.', e);
    } 
  }
}