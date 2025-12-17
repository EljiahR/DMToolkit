import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/lineage_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/feat_instance.dart';

class LineageInstance {
  String id;
  List<FeatInstance> featInstances;
  LineageDefinition definition;

  LineageInstance({
    this.id = '',
    List<FeatInstance>? featInstances,
    required this.definition
  }) : featInstances = featInstances ?? [];

  factory LineageInstance.fromJson(Map<String, dynamic> json, List<FeatDefinition> featDefinitions, List<Effect> effects, List<LineageDefinition> lineageDefinitions) {
    try {
      var featInstanceListJson = json['featInstances'] as List;
      var featInstances = featInstanceListJson
        .map((featInstanceJson) => FeatInstance.fromJson(json, effects, featDefinitions))
        .toList();

      var definitionId = json['definitionId'] as String;
      var definition = lineageDefinitions.firstWhere((lineage) => lineage.id == definitionId);

      return LineageInstance(
        id: json['id'] as String,
        featInstances: featInstances,
        definition: definition
      );
    } on StateError catch (e) {
      log('DefinitionId did not match any LienageDefinitions.', error: e);
      rethrow;
    } catch (e) {
      throw FormatException('LineageInstance model is invalid.', e);
    }
  }
}