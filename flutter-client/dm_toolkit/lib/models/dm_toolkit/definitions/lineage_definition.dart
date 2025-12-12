import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';

class LineageDefinition {
  String id;
  String name;
  String description;
  List<FeatDefinition> featDefinitions;

  LineageDefinition({
    required this.id,
    required this.name,
    required this.description,
    required this.featDefinitions
  });
}