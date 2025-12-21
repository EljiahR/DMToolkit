import 'package:dm_toolkit/helpers/json_list_to_primitive.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/lineage_instance.dart';

class LineageDefinition {
  final String id;
  final String name;
  final String description;
  final List<FeatDefinition> featDefinitions;

  LineageDefinition({
    required this.id,
    required this.name,
    required this.description,
    required this.featDefinitions
  });

  factory LineageDefinition.fromJson(Map<String, dynamic> json, List<FeatDefinition> featDefinitions) {
    try {
      var featDefinitionIds = jsonListToPrimitive<String>(json['featDefinitionIds']);
      var selectedFeats = featDefinitions.where((feat) => featDefinitionIds.contains(feat.id)).toList();
      
      return LineageDefinition(
        id: json['id'] as String,
        name: json['name'] as String, 
        description: json['description'] as String, 
        featDefinitions: selectedFeats
      );
    } catch (e) {
      throw FormatException('LineageDefinition model is invalid.', e);
    }
  }

  LineageInstance generateBlankInstance() {
    return LineageInstance(
      definition: this
    );
  }
}