import 'package:dm_toolkit/helpers/json_list_to_primitive.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/character_class_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/effect.dart';
import 'package:dm_toolkit/models/dm_toolkit/entities/school.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/join_tables/spell_item.dart';

class Spell {
  final String id;
  final String name;
  final int level;
  final School school;
  final List<CharacterClassDefinition> characterClassDefinitions;
  final String castingTime;
  final String range;
  final bool verbalRequired;
  final bool somaticRequired;
  final bool materialsRequired;
  final List<SpellItem> materialRequirements;
  final String duration;
  final String description;
  final List<Effect> effects;

  Spell({
    required this.id,
    required this.name,
    required this.level,
    required this.school,
    required this.characterClassDefinitions,
    required this.castingTime,
    required this.range,
    required this.verbalRequired,
    required this.somaticRequired,
    required this.materialsRequired,
    required this.materialRequirements,
    required this.duration,
    required this.description,
    required this.effects
  });

  factory Spell.fromJson(Map<String, dynamic> json, List<School> schools, List<CharacterClassDefinition> characterClassDefinitions, List<ItemDefinitionBase> itemDefinitionBases, List<Effect> effects) {
    try {
      var schoolId = json['schoolId'] as String;
      var school = schools.firstWhere((s) => s.id == schoolId);

      var characterClassIds = jsonListToPrimitive<String>(json['characterClassIds']);
      var characterClasses = characterClassDefinitions
        .where((characterClass) => characterClassIds.contains(characterClass.id))
        .toList();

      var materialRequirementListJson = json['materialRequirements'] as List;
      var materialRequirements = materialRequirementListJson
        .map((materialRequirementJson) => SpellItem.fromJson(materialRequirementJson, itemDefinitionBases))
        .toList();

      var effectIds = jsonListToPrimitive<String>(json['effectIds']);
      var selectedEffects = effects
        .where((effect) => effectIds.contains(effect.id))
        .toList();
      
      return Spell(
        id: json['id'] as String, 
        name: json['name'] as String, 
        level: json['level'] as int, 
        school: school, 
        characterClassDefinitions: characterClasses, 
        castingTime: json['castingTime'] as String, 
        range: json['range'] as String, 
        verbalRequired: json['verbalRequired'] as bool, 
        somaticRequired: json['somaticRequired'] as bool, 
        materialsRequired: json['materialsRequired'] as bool, 
        materialRequirements: materialRequirements, 
        duration: json['duration'] as String, 
        description: json['description'] as String, 
        effects: selectedEffects
      );
    } catch (e) {
      throw FormatException('Spell model is invalid.', e);
    }
  }
}