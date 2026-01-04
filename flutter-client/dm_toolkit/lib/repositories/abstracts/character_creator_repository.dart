import 'package:dm_toolkit/models/dm_toolkit/instances/character.dart';

abstract class CharacterCreatorRepository {
  Future<Character> fetchCharacter();

  Stream<Character> watchCharacter();

  Future<void> setCharacter();
}