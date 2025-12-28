
import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/collections/character.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/background_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/character_class_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/species_definition.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'character_creator_controller.g.dart';

@riverpod
class CharacterCreatorController extends _$CharacterCreatorController {
  @override
  Future<Character?> build() async {
    return null;
  }

  Future<void> init() async {
    log('Creating blank Character');
    state = AsyncLoading();
    state = await AsyncValue.guard(() async {
      return Character();
    });
  }

  Future<void> setCharacterClass(CharacterClassDefinition? definition) async {
    state = AsyncLoading();
    state = await AsyncValue.guard(() async {
      log('Setting new Character class');
      log('State is null: ${state.requireValue == null}');
      return definition != null ? state.requireValue?.changePrimaryCharacterClassDefinition(definition) ?? state.requireValue : null;
    });
  }

  Future<void> setCharacterBackground(BackgroundDefinition definition) async {
    state = AsyncLoading();
    state = await AsyncValue.guard(() async {
      return state.requireValue?.changeBackgroundDefinition(definition) ?? state.requireValue;
    });
  }

  Future<void> setCharacterSpecies(SpeciesDefinition definition) async {
    state = AsyncLoading();
    state = await AsyncValue.guard(() async {
      return state.requireValue?.changeSpeciesDefinition(definition) ?? state.requireValue;
    });
  }
}