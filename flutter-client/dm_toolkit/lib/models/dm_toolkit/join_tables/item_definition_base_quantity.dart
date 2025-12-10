import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/worth.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/definitions/item_definition.dart';

class ItemDefinitionBaseQuantity {
  ItemDefinitionBase itemDefinitionBase;
  int quantity;

  ItemDefinitionBaseQuantity({
    required this.itemDefinitionBase,
    required this.quantity
  });

  factory ItemDefinitionBaseQuantity.fromJson(Map<String, dynamic> json) {
    try {
      ItemDefinitionBase itemBase;
      var id = json['id'] as String;
      var name = json['name'] as String;
      var description = json['description'] as String;
      var weight = json['weight'] as int;
      var itemType = json['itemType'] as String;
      var worth = Worth.fromJson(json['worth'] as Map<String, dynamic>);
      
      switch (json['itemType'] as String) {
        case 'Weapon':
        case 'Armor':
        case 'Tool':
        default:
          itemBase = ItemDefinition(id: id, name: name, description: description, weight: weight, itemType: itemType, worth: worth);
      }
      
      return ItemDefinitionBaseQuantity(
        itemDefinitionBase: itemBase, 
        quantity: json['quantity'] as int
      );
    } catch (e) {
      throw FormatException("ItemDefinitionBaseQuantity model is invalid.", e);
    }
  }
}