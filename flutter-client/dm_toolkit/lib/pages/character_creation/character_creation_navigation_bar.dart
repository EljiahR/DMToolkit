import 'package:flutter/material.dart';

class CharacterCreationNavigationBar extends StatelessWidget {
  const CharacterCreationNavigationBar({ 
    super.key, 
    required this.onBack, 
    required this.onForward,
    required this.onBackText,
    required this.onForwardText
  });
  
  final VoidCallback onBack;
  final VoidCallback onForward;
  final String onBackText;
  final String onForwardText;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.max,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Flexible(
          child: FractionallySizedBox(
            widthFactor: 1,
            child: TextButton.icon(
              onPressed: onBack,
              icon: Icon(Icons.arrow_back),
              label: Text(onBackText),
            ),
          ),
        ),
        Flexible(
          child: FractionallySizedBox(
            widthFactor: 1,
            child: TextButton.icon(
              onPressed: onForward,
              icon: Icon(Icons.arrow_forward),
              label: Text(onForwardText),
            ),
          ),
        )
      ],
    );
  }
}