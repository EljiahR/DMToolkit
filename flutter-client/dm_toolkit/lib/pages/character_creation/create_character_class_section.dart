import 'dart:developer';

import 'package:dm_toolkit/controllers/character_creator_controller.dart';
import 'package:dm_toolkit/controllers/startup_data_controller.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/character_class_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/instances/character_class_instance.dart';
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
        NullableDropdownMenu(classes: classes, onSelectionChange: setCharacterClass,),
        NullableCreateCharacterClassDisplay(classInstance: selectedClass,)
      ],
    );
  }
}

class NullableDropdownMenu extends StatelessWidget {
  const NullableDropdownMenu({
    super.key,
    required this.classes,
    required this.onSelectionChange
  });

  final List<CharacterClassDefinition>? classes;
  final void Function(CharacterClassDefinition?) onSelectionChange;

  @override
  Widget build(BuildContext context) {
    if (classes != null && classes!.isNotEmpty) {
      return DropdownMenu(
        dropdownMenuEntries: classes!.map((charClass) {
          return DropdownMenuEntry(
            value: charClass, 
            label: charClass.name
          );
        }).toList(),
        onSelected: (value) {
          onSelectionChange(value);
        },
      );
    } else {
      return Text('No classes found');
    }
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