import 'package:dm_toolkit/enums/data_type.dart';
import 'package:dm_toolkit/enums/origin_type.dart';

class Effect {
  String id;
  String? title;
  String? description;
  OriginType originType;
  DataType dataType;
  Map<String, dynamic> data;

  Effect({
    required this.id,
    this.title,
    this.description,
    required this.originType,
    required this.dataType,
    required this.data
  });

  factory Effect.fromJson(Map<String, dynamic> json) {
    try {
      return Effect(
        id: json['id'] as String, 
        originType: json['originType'] as OriginType, 
        dataType: json['dataType'] as DataType, 
        data: json['data'] as Map<String, dynamic>
      );
    } catch (e) {
      throw FormatException('Effect model is invalid.', e);
    }
  }
}