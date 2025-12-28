import 'dart:developer';

import 'package:dm_toolkit/pages/character_creation/character_creation_navigation_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';



class CharacterCreationPage extends ConsumerStatefulWidget {
  const CharacterCreationPage({super.key});

  @override
  ConsumerState<CharacterCreationPage> createState() => _CharacterCreationPageState();
}

class _CharacterCreationPageState extends ConsumerState<CharacterCreationPage> {
  var selectedIndex = 0;
  
  void decreaseIndex() {
    setState(() {
      if (selectedIndex == 0) {
        Navigator.of(context).pop();
        return;
      }
      selectedIndex -= 1;
      log('Decrease from $selectedIndex');
    });
  }

  void increaseIndex() {
    setState(() {
      selectedIndex += 1;
      log('Increase from $selectedIndex');
    });
  }
  

  @override
  Widget build(BuildContext context) {
    Widget page;
    switch (selectedIndex) {
      case 0:
        page = Placeholder();
      case 1: 
        page = Placeholder();
      default:
        throw UnimplementedError('no widget for selectedIndex $selectedIndex');
    }
    
    return Scaffold(
      appBar: AppBar(
        title: Center(child: Text('Character Creation'),),
      ),
      body: page,
      bottomNavigationBar: CharacterCreationNavigationBar(
        onBack: decreaseIndex, 
        onForward: increaseIndex,
        onBackText: 'Stuff',
        onForwardText: 'Stufff',
      ),
    );
  }
}