import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_instance_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/definitions/weapon_definition.dart';

class WeaponInstance extends ItemInstanceBase {
  @override
  ItemDefinitionBase get definition => super.definition as WeaponDefinition;
  
  WeaponInstance({
    super.id = '',
    super.itemType = 'Weapon',
    super.quantity = 1,
    super.isEquipped = false,
    required super.definition
  });

  factory WeaponInstance.fromJson(Map<String, dynamic> json, List<ItemDefinitionBase> itemDefinitionBases) {
    try {
      var definitionId = json['definitionId'] as String;
      var definition = itemDefinitionBases.firstWhere((item) => item.id == definitionId) as WeaponDefinition;

      return WeaponInstance(
        id: json['id'] as String,
        itemType: json['itemType'] as String,
        quantity: json['quantity'] as int,
        isEquipped: json['isEquipped'] as bool,
        definition: definition
      );
    } on StateError catch (e) {
      log('Definition matching WeaponDefinitionId was not found.', error: e);
      rethrow;
    } catch (e) {
      throw FormatException('WeaponInstance model is invalid.', e);
    }
  }
}