import 'package:dm_toolkit/enums/tool_category.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';

class ToolDefinition extends ItemDefinitionBase {
  ToolCategory toolCategory;

  ToolDefinition({
    required super.id,
    required super.name,
    required super.description,
    required super.weight,
    required super.itemType,
    required super.worth,
    required this.toolCategory
  });
}