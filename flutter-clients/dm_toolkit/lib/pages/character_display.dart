import 'package:flutter/material.dart';

class CharacterDisplay extends StatelessWidget {
  const CharacterDisplay({super.key});
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Text("Character Creation Page"),
      floatingActionButtonLocation: FloatingActionButtonLocation.startFloat,
      floatingActionButton: ElevatedButton.icon(
        icon: Icon(Icons.arrow_back),
        onPressed: () {
          Navigator.of(context).pop();
        }, 
        label: Text("Go Back")
      ),
    );
  }
}