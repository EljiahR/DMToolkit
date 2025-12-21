import 'package:flutter/material.dart';

class CharacterCreationHomePage extends StatelessWidget {
  const CharacterCreationHomePage({ super.key });
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(child: Text("Home")),
      ),
      body: Column(),
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