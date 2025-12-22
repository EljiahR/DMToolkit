import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';



class CharacterCreationPage extends ConsumerStatefulWidget {
  const CharacterCreationPage({super.key});

  @override
  ConsumerState<CharacterCreationPage> createState() => _CharacterCreationPageState();
}

class _CharacterCreationPageState extends ConsumerState<CharacterCreationPage> {
  var selectedIndex = 0;
  

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
      bottomNavigationBar: NavigationRail(
        destinations: [
          NavigationRailDestination(
            icon: Icon(Icons.arrow_back), 
            label: Text('Home Page')
          ),
          NavigationRailDestination(
            icon: Icon(Icons.arrow_forward), 
            label: Text('Next Page')
          ),
        ], 
        selectedIndex: selectedIndex,
        onDestinationSelected: (value) {
          // This is gonna need changed to work right but not bad so far
          setState(() {
            selectedIndex = value;
          });
        },  
      ),
    );
  }
}