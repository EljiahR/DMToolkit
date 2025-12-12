import 'package:dm_toolkit/helpers/json_list_to_primitive.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/lineage_definition.dart';

class SpeciesDefinition {
  String id;
  String name;
  String description;
  String type;
  int speed;
  List<String> sizes;
  List<FeatDefinition> featDefinitions;
  List<LineageDefinition> lineageDefinitions;

  SpeciesDefinition({
    required this.id,
    required this.name,
    required this.description,
    required this.type,
    required this.speed,
    required this.sizes,
    required this.featDefinitions,
    required this.lineageDefinitions
  });

  factory SpeciesDefinition.fromJson(Map<String, dynamic> json, List<FeatDefinition> featDefinitions) {
    try {
      var sizes = jsonListToPrimitive<String>(json['sizes']);
      
      var featDefinitionIds = jsonListToPrimitive(json['FeatDefinitionIds']);
      var selectedFeatDefinitions = featDefinitions
      .where((feat) => featDefinitionIds.contains(feat.id))
      .toList();

      var lineageDefinitionListJson = json['LineageDefinitions'] as List;
      var lineageDefinitions = lineageDefinitionListJson
        .map((lineageDefinitionJson) => LineageDefinition.fromJson(lineageDefinitionJson, featDefinitions))
        .toList();

      return SpeciesDefinition(
        id: json['id'] as String,
        name: json['name'] as String, 
        description: json['description'] as String, 
        type: json['type'] as String, 
        speed: json['speed'] as int, 
        sizes: sizes, 
        featDefinitions: selectedFeatDefinitions, 
        lineageDefinitions: lineageDefinitions
      );
    } catch (e) {
      throw FormatException('SpeciesDefinition model is invalid.', e);
    }
  }
}