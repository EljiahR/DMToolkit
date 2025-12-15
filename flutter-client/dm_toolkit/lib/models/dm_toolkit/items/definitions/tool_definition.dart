import 'package:dm_toolkit/enums/tool_category.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/worth.dart';

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

  factory ToolDefinition.fromJson(Map<String, dynamic> json) {
    try {
      var worth = Worth.fromJson(json['worth']);
      
      return ToolDefinition(
        id: json['id'] as String, 
        name: json['name'] as String, 
        description: json['description'] as String, 
        weight: json['weight'] as int, 
        itemType: json['itemType'] as String, 
        worth: worth, 
        toolCategory: ToolCategory.values[json['toolCategory'] as int]
      );
    } catch (e) {
      throw FormatException('ToolDefinition model is invalid.', e);
    }
  }
}