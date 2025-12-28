import 'package:dm_toolkit/helpers/json_list_to_primitive.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/definition_interface.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/lineage_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/species_instance.dart';

class SpeciesDefinition implements IDefinition {
  @override
  final String id;
  @override
  final String name;
  @override
  final String description;
  final String type;
  final int speed;
  final List<String> sizes;
  final List<FeatDefinition> featDefinitions;
  final List<LineageDefinition> lineageDefinitions;

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
      
      var featDefinitionIds = jsonListToPrimitive<String>(json['featDefinitionIds']);
      var selectedFeatDefinitions = featDefinitions
        .where((feat) => featDefinitionIds.contains(feat.id))
        .toList();

      var lineageDefinitionListJson = json['lineageDefinitions'] as List;
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

  SpeciesInstance generateBlankInstance() {
    return SpeciesInstance(
      definition: this
    );
  }
}