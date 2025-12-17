class School {
  final String id;
  final String name;

  School({
    required this.id,
    required this.name
  });

  factory School.fromJson(Map<String, dynamic> json) {
    try {
      return School(
        id: json['id'] as String,
        name: json['name'] as String
      );
    } catch (e) {
      throw FormatException('School model is invalid.', e);
    }
  }
}