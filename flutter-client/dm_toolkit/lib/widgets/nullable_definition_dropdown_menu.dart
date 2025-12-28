import 'package:dm_toolkit/models/dm_toolkit/definitions/definition_interface.dart';
import 'package:flutter/material.dart';

class NullableDefinitionDropdownMenu<T extends IDefinition> extends StatelessWidget {
  const NullableDefinitionDropdownMenu({
    super.key,
    required this.classes,
    required this.onSelectionChange
  });

  final List<T>? classes;
  final void Function(T?) onSelectionChange;

  @override
  Widget build(BuildContext context) {
    final nonNullClasses = classes;
    
    if (nonNullClasses != null && nonNullClasses.isNotEmpty) {
      return DropdownMenu(
        dropdownMenuEntries: nonNullClasses.map((charClass) {
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
      return Text('No definition found for type ${T.toString()}');
    }
  }
}