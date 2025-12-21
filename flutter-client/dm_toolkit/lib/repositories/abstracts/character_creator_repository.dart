import 'package:dm_toolkit/models/dm_toolkit/collections/character.dart';

abstract class CharacterCreatorRepository {
  Future<Character> fetchCharacter();

  Stream<Character> watchCharacter();

  Future<void> setCharacter();
}