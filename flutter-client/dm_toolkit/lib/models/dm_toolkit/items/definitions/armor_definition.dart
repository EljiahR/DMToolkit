import 'package:dm_toolkit/enums/armor_category.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/worth.dart';

class ArmorDefinition extends ItemDefinitionBase {
  final ArmorCategory armorCategory;
  final int baseAC;
  final int dexterityCap;
  final bool hasDexterityCap;
  final int strengthRequirement;
  final bool hasStealthDisadvantage;
  final String don;
  final String doff;

  ArmorDefinition({
    required super.id,
    required super.name,
    required super.description,
    required super.weight,
    required super.itemType,
    required super.worth,
    required this.armorCategory,
    required this.baseAC,
    required this.dexterityCap,
    required this.hasDexterityCap,
    required this.strengthRequirement,
    required this.hasStealthDisadvantage,
    required this.don,
    required this.doff
  });

  factory ArmorDefinition.fromJson(Map<String, dynamic> json) {
    try {
      var worth = Worth.fromJson(json['worth']);
      
      return ArmorDefinition(
        id: json['id'] as String, 
        name: json['name'] as String, 
        description: json['description'] as String, 
        weight: json['weight'] as int, 
        itemType: json['itemType'] as String, 
        worth: worth, 
        armorCategory: ArmorCategory.values[json['armorCategory'] as int], 
        baseAC: json['baseAC'] as int, 
        dexterityCap: json['dexterityCap'] as int, 
        hasDexterityCap: json['hasDexterityCap'] as bool, 
        strengthRequirement: json['strengthRequirement'] as int, 
        hasStealthDisadvantage: json['hasStealthDisadvantage'] as bool, 
        don: json['don'] as String, 
        doff: json['doff'] as String
      );
    } catch (e) {
      throw FormatException('ArmorDefinition model invalid.', e);
    }
  }
}