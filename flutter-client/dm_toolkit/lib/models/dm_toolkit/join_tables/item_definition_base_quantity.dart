import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';

class ItemDefinitionBaseQuantity {
  final ItemDefinitionBase itemDefinitionBase;
  final int quantity;

  ItemDefinitionBaseQuantity({
    required this.itemDefinitionBase,
    required this.quantity
  });

  factory ItemDefinitionBaseQuantity.fromJson(Map<String, dynamic> json, List<ItemDefinitionBase> itemDefinitionBases) {
    try {
      var itemDefinitionBaseId = json['itemDefinitionBaseId'] as String;
      var itemDefinitionBase = itemDefinitionBases.firstWhere((item) => item.id == itemDefinitionBaseId);
      
      return ItemDefinitionBaseQuantity(
        itemDefinitionBase: itemDefinitionBase, 
        quantity: json['quantity'] as int
      );
    } catch (e) {
      throw FormatException("ItemDefinitionBaseQuantity model is invalid.", e);
    }
  }
}