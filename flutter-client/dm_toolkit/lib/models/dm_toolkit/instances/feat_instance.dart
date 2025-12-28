import 'dart:developer';

import 'package:dm_toolkit/helpers/json_list_to_primitive.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/instance_interface.dart';

class FeatInstance implements IInstance<FeatDefinition> {
  final String id;
  final List<Effect> effects;

  @override
  final FeatDefinition definition;

  FeatInstance({
    this.id = '',
    List<Effect>? effects,
    required this.definition
  }) : effects = effects ?? [];

  factory FeatInstance.fromJson(Map<String, dynamic> json, List<Effect> effects, List<FeatDefinition> featDefinitions) {
    try {
      var effectIds = jsonListToPrimitive<String>(json['effectIds']);
      var selectedEffects = effects
        .where((effect) => effectIds.contains(effect.id))
        .toList();

      var definitionId = json['definitionId'] as String;
      var definition = featDefinitions
        .firstWhere((feat) => feat.id == definitionId);
      
      return FeatInstance(
        id: json['id'] as String,
        effects: selectedEffects,
        definition: definition
      );
    } on StateError catch(e) {
      log('DefinitionId did not match any current FeatDefinition ids.', error: e);
      rethrow;
    } catch (e) {
      throw FormatException('FeatInstance model is invalid.', e);
    }
  }
}