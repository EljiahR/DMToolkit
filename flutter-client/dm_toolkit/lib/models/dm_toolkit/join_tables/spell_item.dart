import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';

class SpellItem {
  final ItemDefinitionBase itemDefinitionBase;
  final int amountRequired;

  SpellItem({
    required this.itemDefinitionBase,
    required this.amountRequired
  });

  factory SpellItem.fromJson(Map<String, dynamic> json, List<ItemDefinitionBase> itemDefinitionBases) {
    try {
      var itemId = json['itemId'] as String;
      var requiredItem = itemDefinitionBases.firstWhere((item) => item.id == itemId);

      return SpellItem(
        itemDefinitionBase: requiredItem, 
        amountRequired: json['amountRequired'] as int
      );
    } catch (e) {
      throw FormatException('SpellItem model is invalid.', e);
    }
  }
}