import 'package:dm_toolkit/controllers/startup_data_controller.dart';
import 'package:dm_toolkit/pages/character_creation/character_creation_page.dart';
import 'package:dm_toolkit/pages/character_display_page.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

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
                builder: (context) => const CharacterCreationPage()
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
    final asyncData = ref.watch(startupDataControllerProvider);

    return asyncData.when(
      data: (data) => Row(
        mainAxisSize: MainAxisSize.min,
        spacing: 10.0,
        children: [
          ElevatedButton(
            onPressed: () {
              ref.read(startupDataControllerProvider.notifier).init();
            }, 
            child: Text('fetchStartupData()')
          ),
          ElevatedButton(
            onPressed: () {
              ref.read(startupDataControllerProvider.notifier).init(forceJson: true);
            }, 
            child: Text('Load from json')
          )
        ],
      ), 
      error: (err, stack) => Text('Error occured.'), 
      loading: () => CircularProgressIndicator()
    );
  }
}

class ErrorMessage extends ConsumerWidget {
  const ErrorMessage({
    super.key
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final definitionCount = ref.watch(startupDataControllerProvider).value?.abilityScoreDefinitions.length;
    final hasSome = definitionCount != null && definitionCount > 0;

    return Text(hasSome ? 'got data' : 'no data');
  }
}