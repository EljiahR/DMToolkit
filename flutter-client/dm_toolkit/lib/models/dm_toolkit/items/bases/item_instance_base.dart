import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';

abstract class ItemInstanceBase {
  String id;
  String itemType;
  int quantity;
  bool isEquipped;
  ItemDefinitionBase definition;

  ItemInstanceBase({
    this.id = '',
    this.itemType = 'Item',
    this.quantity = 1,
    this.isEquipped = false,
    required this.definition
  });
}