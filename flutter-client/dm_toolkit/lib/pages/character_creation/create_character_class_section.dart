import 'dart:developer';

import 'package:dm_toolkit/controllers/character_creator_controller.dart';
import 'package:dm_toolkit/controllers/startup_data_controller.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/character_class_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/character_class_instance.dart';
import 'package:dm_toolkit/widgets/nullable_definition_dropdown_menu.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class CreateCharacterClassSection extends ConsumerWidget {
  const CreateCharacterClassSection({ super.key });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final classes = ref.read(startupDataControllerProvider).value?.characterClassDefinitions;
    final selectedClass = ref.watch(characterCreatorControllerProvider).value?.primaryCharacterClassInstance;
    
    void setCharacterClass(CharacterClassDefinition? definition) {
      log('Setting class to ${definition?.name}');
      ref.read(characterCreatorControllerProvider.notifier).setCharacterClass(definition);
    }

    return Column(
      children: [
        Text('Text describing what a class is? idk...'),
        NullableDefinitionDropdownMenu(classes: classes, onSelectionChange: setCharacterClass,),
        NullableCreateCharacterClassDisplay(classInstance: selectedClass,)
      ],
    );
  }
}

class NullableCreateCharacterClassDisplay extends StatelessWidget {
  const NullableCreateCharacterClassDisplay({
    super.key,
    this.classInstance
  });

  final CharacterClassInstance? classInstance;

  @override
  Widget build(BuildContext context) {
    final nonNullClassInstance = classInstance;
    
    if (nonNullClassInstance == null) {
      return SizedBox();
    }   

    return Column(
      children: [
        Text(nonNullClassInstance.definition.name),
        Text(nonNullClassInstance.definition.description)
      ],
    );
  }
}