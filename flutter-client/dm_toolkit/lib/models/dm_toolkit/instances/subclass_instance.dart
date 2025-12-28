import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/subclass_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/feat_instance.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/instance_interface.dart';

class SubclassInstance implements IInstance<SubclassDefinition> {
  final String id;
  final List<FeatInstance> featInstances;

  @override
  final SubclassDefinition definition;

  SubclassInstance({
    this.id = '',
    List<FeatInstance>? featInstances,
    required this.definition
  }) : featInstances = featInstances ?? [];

  factory SubclassInstance.fromJson(Map<String, dynamic> json, List<Effect> effects, List<FeatDefinition> featDefinitions, List<SubclassDefinition> subclassDefinitions) {
    try {
      var featInstanceListJson = json['featInstances'] as List;
      var featInstances = featInstanceListJson
        .map((featInstanceJson) => FeatInstance.fromJson(featInstanceJson, effects, featDefinitions))
        .toList();

      var definitionId = json['definitionId'] as String;
      var definition = subclassDefinitions.firstWhere((subclass) => subclass.id == definitionId);

      return SubclassInstance(
        id: json['id'] as String,
        featInstances: featInstances,
        definition: definition
      );
    } on StateError catch (e) {
      log('Definition for SubclassInstance was not found', error: e);
      rethrow;
    } catch (e) {
      throw FormatException('SubclassInstance model is invalid.', e);
    }
  }
}