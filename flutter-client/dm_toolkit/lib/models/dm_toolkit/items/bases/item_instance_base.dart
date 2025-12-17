import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';

abstract class ItemInstanceBase {
  final String id;
  final String itemType;
  final int quantity;
  final bool isEquipped;
  final ItemDefinitionBase definition;

  ItemInstanceBase({
    this.id = '',
    this.itemType = 'Item',
    this.quantity = 1,
    this.isEquipped = false,
    required this.definition
  });
}