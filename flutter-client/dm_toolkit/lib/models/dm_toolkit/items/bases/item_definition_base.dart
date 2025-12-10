import 'package:dm_toolkit/models/dm_toolkit/items/bases/worth.dart';

abstract class ItemDefinitionBase {
  String id;
  String name;
  String description;
  int weight;
  String itemType;
  Worth worth;

  ItemDefinitionBase({
    required this.id,
    required this.name,
    required this.description,
    required this.weight,
    required this.itemType,
    required this.worth
  });
}