import 'dart:developer';

import 'package:flutter/material.dart';

class CharacterCreationNavigation extends StatelessWidget {
  const CharacterCreationNavigation({
    super.key,
    required this.previousPageTitle,
    required this.nextPageTitle,
    required this.nextPage
  });

  final String previousPageTitle;
  final String nextPageTitle;
  final Widget nextPage;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        FloatingActionButton(
          onPressed: () {
            Navigator.of(context).pop();
          }
        ),
        FloatingActionButton(
          onPressed: () {
            // Need to figure out how to do this part or not
          }
        )
      ],
    );
  }
}