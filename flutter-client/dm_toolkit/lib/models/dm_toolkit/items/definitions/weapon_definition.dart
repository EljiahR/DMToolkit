import 'package:collection/collection.dart';
import 'package:dm_toolkit/enums/weapon_category.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/worth.dart';

class WeaponDefinition extends ItemDefinitionBase {
  WeaponCategory weaponCategory;
  int numberOfDice;
  int numberOfSides;
  String damageType;
  List<Effect> weaponProperties;
  Effect? weaponMastery;

  WeaponDefinition({
    required super.id,
    required super.name,
    required super.description,
    required super.weight,
    required super.itemType,
    required super.worth,
    required this.weaponCategory,
    required this.numberOfDice,
    required this.numberOfSides,
    required this.damageType,
    required this.weaponProperties,
    required this.weaponMastery
  });

  factory WeaponDefinition.fromJson(Map<String, dynamic> json, List<Effect> effects) {
    try {
      var worth = Worth.fromJson(json['worth']);
      var weaponPropertyIdListJson = json['weaponPropertyIds'] as List;
      var weaponPropertyIds = weaponPropertyIdListJson
        .map((weaponPropertyIdJson) => weaponPropertyIdJson as String)
        .toList(); 
      var weaponProperties = effects.where((effect) => weaponPropertyIds.contains(effect.id)).toList();
      var weaponMasteryId = json['weaponMasteryId'] as String;
      var weaponMastery = effects.firstWhereOrNull((effect) => effect.id == weaponMasteryId);
      
      return WeaponDefinition(
        id: json['id'] as String, 
        name: json['name'] as String, 
        description: json['description'] as String, 
        weight: json['weight'] as int, 
        itemType: json['itemType'] as String, 
        worth: worth, 
        weaponCategory: json['weaponCategory'] as WeaponCategory, 
        numberOfDice: json['numberOfDice'] as int, 
        numberOfSides: json['numberOfSides'] as int, 
        damageType: json['damageType'] as String, 
        weaponProperties: weaponProperties, 
        weaponMastery: weaponMastery
      );
    } catch (e) {
      throw FormatException('WeaponDefinition model is invalid.', e);
    }
  }
}