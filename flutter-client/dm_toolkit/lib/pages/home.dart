import 'package:dm_toolkit/pages/character_creation.dart';
import 'package:dm_toolkit/pages/character_display.dart';
import 'package:dm_toolkit/view_models/dm_toolkit_view_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:provider/provider.dart';

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
            NavRow(),
            DataRow(),
            ErrorMessage()
          ],
        ),
      ),
      
    );
  }
}

class NavRow extends StatelessWidget {
  const NavRow({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
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
    );
  }
}

class DataRow extends ConsumerWidget {
  const DataRow({
    super.key
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      spacing: 10.0,
      children: [
        ElevatedButton(
          onPressed: () {
            ref.watch(provider);
          }, 
          child: Text('fetchStartupData()')
        ),
        ElevatedButton(
          onPressed: () {
            context.read<DMToolkitViewModel>().loadStartupDataFromSeedDataJson();
          },
          child: Text('Data from .json'),
        ), 
      ],
    );
  }
}

class ErrorMessage extends StatelessWidget {
  const ErrorMessage({
    super.key
  });

  @override
  Widget build(BuildContext context) {
    final errorMessage = context.watch<DMToolkitViewModel>().errorMessage;
    final displayText = errorMessage ?? 'No problem.';

    return Text(displayText);
  }
}