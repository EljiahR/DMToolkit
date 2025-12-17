import 'package:dm_toolkit/models/dm_toolkit/items/bases/worth.dart';

abstract class ItemDefinitionBase {
  final String id;
  final String name;
  final String description;
  final int weight;
  final String itemType;
  final Worth worth;

  ItemDefinitionBase({
    required this.id,
    required this.name,
    required this.description,
    required this.weight,
    required this.itemType,
    required this.worth
  });
}