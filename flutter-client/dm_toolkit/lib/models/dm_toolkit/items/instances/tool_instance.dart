import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_instance_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/definitions/tool_definition.dart';

class ToolInstance extends ItemInstanceBase {
  @override
  ToolDefinition get definition => super.definition as ToolDefinition;
  
  ToolInstance({
    super.id = '',
    super.itemType = 'Weapon',
    super.quantity = 1,
    super.isEquipped = false,
    required super.definition
  });

  factory ToolInstance.fromJson(Map<String, dynamic> json, List<ItemDefinitionBase> itemDefinitionBases) {
    try {
      var definitionId = json['definitionId'] as String;
      var definition = itemDefinitionBases.firstWhere((item) => item.id == definitionId) as ToolDefinition;

      return ToolInstance(
        id: json['id'] as String,
        itemType: json['itemType'] as String,
        quantity: json['quantity'] as int,
        isEquipped: json['isEquipped'] as bool,
        definition: definition
      );
    } on StateError catch (e) {
      log('Definition matching ToolDefinitionId was not found.', error: e);
      rethrow;
    } catch (e) {
      throw FormatException('ToolInstance model is invalid.', e);
    }
  }
}