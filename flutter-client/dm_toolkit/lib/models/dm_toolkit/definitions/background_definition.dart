import 'package:collection/collection.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/ability_score_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/skill_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/join_tables/item_definition_base_quantity.dart';

class BackgroundDefinition {
  String id;
  String name;
  String description;
  List<AbilityScoreDefinition> abilityScoreDefinitions;
  FeatDefinition? featDefinition;
  List<SkillDefinition> skillDefinitions;
  int startingGp;
  List<ItemDefinitionBaseQuantity> itemDefinitionBaseQuantities;

  BackgroundDefinition({
    required this.id,
    required this.name,
    required this.description,
    required this.abilityScoreDefinitions,
    required this.featDefinition,
    required this.skillDefinitions,
    required this.startingGp,
    required this.itemDefinitionBaseQuantities
  });

  factory BackgroundDefinition.fromJson(Map<String, dynamic> json, List<AbilityScoreDefinition> abilityScoreDefinitions, List<FeatDefinition> featDefinitions, List<SkillDefinition> skillDefinitions, List<ItemDefinitionBase> itemDefinitionBases) {
    try {
      var abilityScoreDefinitionListJson = json['abilityScoreDefinitionIds'] as List;
      var abilityScoreDefinitionIds = abilityScoreDefinitionListJson
        .map((abilityScoreDefinitionIdJson) => abilityScoreDefinitionIdJson as String)
        .toList();
      var selectedAbilityScoreDefinitions = abilityScoreDefinitions
        .where((abilityScoreDefinition) => abilityScoreDefinitionIds.contains(abilityScoreDefinition.id))
        .toList();

      var featDefinitionId = json['featDefinitionId'] as String;
      var featDefinition = featDefinitions.firstWhereOrNull((feat) => feat.id == featDefinitionId);

      var skillDefinitionIdListJson = json['skillDefinitionIds'] as List;
      var skillDefinitionIds = skillDefinitionIdListJson
        .map((skillDefinionIdJson) => skillDefinionIdJson as String)
        .toList();
      var selectedSkillDefinitions = skillDefinitions
        .where((skillDefinition) => skillDefinitionIds.contains(skillDefinition.id))
        .toList();

      var itemDefinitionBaseQuantityListJson = json['itemDefinitionBaseQuantities'] as List;
      var itemDefinitionBaseQuantities = itemDefinitionBaseQuantityListJson
        .map((itemDefinitionBaseQuantityJson) => ItemDefinitionBaseQuantity.fromJson(json, itemDefinitionBases))
        .toList();

      return BackgroundDefinition(
        id: json['id'] as String, 
        name: json['name'] as String, 
        description: json['description'] as String, 
        abilityScoreDefinitions: selectedAbilityScoreDefinitions, 
        featDefinition: featDefinition, 
        skillDefinitions: selectedSkillDefinitions, 
        startingGp: json['startingGp'] as int, 
        itemDefinitionBaseQuantities: itemDefinitionBaseQuantities
      );
    } catch (e) {
      throw FormatException('BackgroundDefinition model is invalid.', e);
    }
  }
}