import 'package:dm_toolkit/pages/character_creation.dart';
import 'package:dm_toolkit/pages/character_display.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({ super.key });
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(child: Text("Home")),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          spacing: 10.0,
          children: [
            Row(
              mainAxisSize: MainAxisSize.min,
              spacing: 10.0,
              children: [
                ElevatedButton(
                  onPressed: () { 
                    Navigator.of(context).push(
                      MaterialPageRoute<void>(
                        builder: (context) => const CharacterCreation()
                      )
                    );
                  }, 
                  child: Text('Create a Character')
                ),
                ElevatedButton(
                  onPressed: () { 
                    Navigator.of(context).push(
                      MaterialPageRoute<void>(
                        builder: (context) => const CharacterDisplay()
                      )
                    );
                  }, 
                  child: Text('Character View')
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}