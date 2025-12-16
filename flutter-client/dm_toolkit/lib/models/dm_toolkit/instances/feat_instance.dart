import 'dart:developer';

import 'package:dm_toolkit/helpers/json_list_to_primitive.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';

class FeatInstance {
  String id;
  List<Effect> effects;
  FeatDefinition definition;

  FeatInstance({
    this.id = '',
    List<Effect>? effects,
    required this.definition
  }) : effects = effects ?? [];

  factory FeatInstance.fromJson(Map<String, dynamic> json, List<Effect> effects) {
    try {
      var effectIds = jsonListToPrimitive<String>(json['effectIds']);
      var selectedEffects = effects
        .where((effect) => effectIds.contains(effect.id))
        .toList();
      
      return FeatInstance(
        id: json['id'] as String,
        effects: selectedEffects
        definition: definition
      );
    } on StateError catch(e) {
      log('DefinitionId did not match any current FeatDefinition ids.', error: e);
      rethrow;
    } catch (e) {
    throw FormatException('FeatInstance model is invalid.', e);
    }
}