import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_instance_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/definitions/item_definition.dart';

class ItemInstance extends ItemInstanceBase {
  @override
  ItemDefinition get definition => super.definition as ItemDefinition;
  
  ItemInstance({
    super.id = '',
    super.itemType = 'Item',
    super.quantity = 1,
    super.isEquipped = false,
    required super.definition
  });

  factory ItemInstance.fromJson(Map<String, dynamic> json, List<ItemDefinitionBase> itemDefinitionBases) {
    try {
      var definitionId = json['definitionId'] as String;
      var definition = itemDefinitionBases.firstWhere((item) => item.id == definitionId) as ItemDefinition;

      return ItemInstance(
        id: json['id'] as String,
        itemType: json['itemType'] as String,
        quantity: json['quantity'] as int,
        isEquipped: json['isEquipped'] as bool,
        definition: definition
      );
    } on StateError catch (e) {
      log('Definition matching ItemDefinitionId was not found.', error: e);
      rethrow;
    } catch (e) {
      throw FormatException('ItemInstance model is invalid.', e);
    }
  }
}