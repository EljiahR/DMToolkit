import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/lineage_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/species_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/feat_instance.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/lineage_instance.dart';

class SpeciesInstance {
  String id;
  String size;
  LineageInstance? lineageInstance;
  List<FeatInstance> featInstances;
  SpeciesDefinition definition;

  SpeciesInstance({
    this.id ='',
    this.size = '',
    this.lineageInstance,
    List<FeatInstance>? featInstances,
    required this.definition
  }) : featInstances = featInstances ?? [];

  factory SpeciesInstance.fromJson(Map<String, dynamic> json, List<FeatDefinition> featDefinitions, List<Effect> effects, List<SpeciesDefinition> speciesDefinitions, List<LineageDefinition> lineageDefinitions) {
    try {
      var lineageInstanceJson = json['lineageInstance'] as Map<String, dynamic>?;
      var lineageInstance = lineageInstanceJson != null ? LineageInstance.fromJson(lineageInstanceJson, featDefinitions, effects, lineageDefinitions) : null;

      var featInstanceListJson = json['featInstances'] as List;
      var featInstances = featInstanceListJson
        .map((featInstanceJson) => FeatInstance.fromJson(featInstanceJson, effects, featDefinitions))
        .toList();

      var definitionId = json['definitionId'] as String;
      var definition = speciesDefinitions.firstWhere((species) => species.id == definitionId);

      return SpeciesInstance(
        id: json['id'] as String,
        size: json['size'] as String,
        lineageInstance: lineageInstance,
        featInstances: featInstances,
        definition: definition
      );
    } on StateError catch(e) {
      log('DefinitionId did not match any SpeciesDefinitions.', error: e);
      rethrow;
    } catch (e) {
      throw FormatException('SpeciesInstance model is invalid.', e);
    }
  }
}