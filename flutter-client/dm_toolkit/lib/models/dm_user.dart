import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/lineage_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/skill_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/subclass_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/character.dart';

class DMUser {
  DMUser({
    List<Character>? characters
  }) : characters = characters ?? [];

  final List<Character> characters;

  factory DMUser.fromJson(Map<String, dynamic> json, StartupData data) {
    try {
      var subclassDefinitions = data.characterClassDefinitions
        .fold<List<SubclassDefinition>>([], (subclasses, characterClass) => [...subclasses, ...characterClass.subclassDefinitions])
        .toList();
      
      var lineageDefinitions = data.speciesDefinitions
        .fold<List<LineageDefinition>>([], (lineages, speciesDefinition) => [...lineages, ...speciesDefinition.lineageDefinitions])
        .toList();

      var skillDefinitions = data.abilityScoreDefinitions
        .fold<List<SkillDefinition>>([], (skills, abilityScoreDefinition) => [...skills, ...abilityScoreDefinition.skillDefinitions])
        .toList();
      
      var characterListJson = json['characters'] as List;
      var characters = characterListJson 
        .map((characterJson) => Character.fromJson(json, data.featDefinitions, data.effects, data.characterClassDefinitions, subclassDefinitions, data.abilityScoreDefinitions, data.backgroundDefinitions, data.speciesDefinitions, lineageDefinitions, skillDefinitions, data.spells, data.conditionDefinitions, data.itemDefinitionBases))
        .toList();
      
      return new DMUser(
        characters: characters
      );
    } catch (e) {
      throw FormatException('DMUser model is invalid.', e);
    }
  }
}