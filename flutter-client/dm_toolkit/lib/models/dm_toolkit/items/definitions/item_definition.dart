import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/worth.dart';

class ItemDefinition extends ItemDefinitionBase {
  ItemDefinition({
    required super.id,
    required super.name,
    required super.description,
    required super.weight,
    required super.itemType,
    required super.worth
  });

  factory ItemDefinition.fromJson(Map<String, dynamic> json) {
    try {
      var worth = Worth.fromJson(json['worth'] as Map<String, dynamic>);
    
      return ItemDefinition(
        id: json['id'] as String, 
        name: json['name'] as String, 
        description: json['description'] as String, 
        weight: json['weight'] as int, 
        itemType: json['itemType'] as String, 
        worth: worth
      );
    } catch (e) {
      throw FormatException("ItemDefinition model invalid.", e);
    }
  }
}