import 'package:dm_toolkit/notifiers/dm_toolkit.dart';
import 'package:dm_toolkit/pages/character_creation.dart';
import 'package:dm_toolkit/pages/character_display.dart';
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
    final asyncData = ref.watch(dMToolkitProvider);

    return asyncData.when(
      data: (data) => Row(
        mainAxisSize: MainAxisSize.min,
        spacing: 10.0,
        children: [
          ElevatedButton(
            onPressed: () {
              ref.read(dMToolkitProvider.notifier).fetchStartupData();
            }, 
            child: Text('fetchStartupData()')
          ),
          ElevatedButton(
            onPressed: () {
              ref.read(dMToolkitProvider.notifier).loadStartupDataFromSeedDataJson();
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
    final definitionCount = ref.watch(dMToolkitProvider).value?.abilityScoreDefinitions.length ?? 0;
    final hasSome = definitionCount > 0;

    return Text(hasSome ? 'got data' : 'no data');
  }
}