import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';
import 'package:dm_toolkit/models/dm_toolkit/join_tables/feat_definition_effect_grouping.dart';

class FeatDefinition {
  String id;
  String name;
  String description;
  List<FeatDefinitionEffectGrouping> availableEffectTables;

  FeatDefinition({
    required this.id,
    required this.name,
    required this.description,
    required this.availableEffectTables
  });

  factory FeatDefinition.fromJson(Map<String, dynamic> json, List<Effect> effects) {
    try {
      var availableEffectTablesListJson = json['availableEffectTables'] as List;
      var availableEffectTables = availableEffectTablesListJson
        .map((availableEffectTableJson) => FeatDefinitionEffectGrouping.fromJson(availableEffectTableJson, effects))
        .toList();

      return FeatDefinition(
        id: json['id'] as String, 
        name: json['name'] as String, 
        description: json['description'] as String, 
        availableEffectTables: availableEffectTables
      );
    } catch (e) {
      throw FormatException('FeatDefinition model is invalid.', e);
    }
  }
}