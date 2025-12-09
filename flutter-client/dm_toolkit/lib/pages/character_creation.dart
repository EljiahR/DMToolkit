import 'package:flutter/material.dart';

class CharacterCreation extends StatelessWidget {
  const CharacterCreation({ super.key });
  
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