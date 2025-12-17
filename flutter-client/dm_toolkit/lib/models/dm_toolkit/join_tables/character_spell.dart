import 'package:dm_toolkit/models/dm_toolkit/entities/spell.dart';

class CharacterSpell {
  final Spell spell;
  final bool isPrepared;

  CharacterSpell({
    required this.spell,
    this.isPrepared = false
  });

  factory CharacterSpell.fromJson(Map<String, dynamic> json, List<Spell> spells) {
    try {
      var spellId = json['spellId'] as String;
      var spell = spells.firstWhere((s) => s.id == spellId);

      return CharacterSpell(
        spell: spell,
        isPrepared: json['isPrepared'] as bool
      );
    } catch (e) {
      throw FormatException('CharacterSpell model is invalid.', e);
    }
  }
}