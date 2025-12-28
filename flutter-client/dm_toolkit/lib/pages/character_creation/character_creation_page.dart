import 'dart:developer';

import 'package:dm_toolkit/controllers/character_creator_controller.dart';
import 'package:dm_toolkit/pages/character_creation/character_creation_character_class_section.dart';
import 'package:dm_toolkit/pages/character_creation/character_creation_home_section.dart';
import 'package:dm_toolkit/pages/character_creation/character_creation_navigation_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

const creationPageSections = [
  'Start',
  'Class'
];

class CharacterCreationPage extends ConsumerStatefulWidget {
  const CharacterCreationPage({super.key});

  @override
  ConsumerState<CharacterCreationPage> createState() => _CharacterCreationPageState();
}

class _CharacterCreationPageState extends ConsumerState<CharacterCreationPage> {
  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      ref.read(characterCreatorControllerProvider.notifier).initIfNull();
    });
  }
  
  var selectedIndex = 0;
  
  void decreaseIndex() {
    setState(() {
      if (selectedIndex == 0) {
        Navigator.of(context).pop();
        return;
      }
      selectedIndex -= 1;
      log('Decrease to $selectedIndex');
    });
  }

  void increaseIndex() {
    setState(() {
      selectedIndex += 1;
      log('Increase to $selectedIndex');
    });
  }

  @override
  Widget build(BuildContext context) {
    final asyncData = ref.watch(characterCreatorControllerProvider);
    
    Widget page;
    bool canProceed;
    switch (selectedIndex) {
      case 0:
        page = CharacterCreationHomeSection();
        canProceed = true;
      case 1: 
        page = CharacterCreationCharacterClassSection();
        canProceed = asyncData.value?.primaryCharacterClassInstance != null;
      default:
        canProceed = false;
        throw UnimplementedError('no widget for selectedIndex $selectedIndex');
    }

    String titleText = 'Character Creation';
    if (selectedIndex > 0) {
      titleText += ' - ${creationPageSections[selectedIndex]}';
    }
    
    return Scaffold(
      appBar: AppBar(
        title: Center(child: Text(titleText),),
      ),
      body: asyncData.when(
        data: (data) => page, 
        error: (error, stack) => Text(error.toString()), 
        loading: () => const CircularProgressIndicator()
      ),
      bottomNavigationBar: CharacterCreationNavigationBar(
        onBack: decreaseIndex, 
        onForward: canProceed ? increaseIndex : null,
        onBackText: selectedIndex > 0 ? creationPageSections[selectedIndex - 1] : 'Go Home',
        onForwardText: selectedIndex < creationPageSections.length - 1 ? creationPageSections[selectedIndex + 1] : 'View Character',
      ),
    );
  }
}