import 'dart:developer';

import 'package:dm_toolkit/enums/data_type.dart';
import 'package:dm_toolkit/enums/origin_type.dart';

class Effect {
  final String id;
  final String? title;
  final String? description;
  final OriginType originType;
  final DataType dataType;
  final Map<String, dynamic> data;

  Effect({
    required this.id,
    required this.title,
    required this.description,
    required this.originType,
    required this.dataType,
    required this.data
  });

  factory Effect.fromJson(Map<String, dynamic> json) {
    try {
      log('Data');
      return Effect(
        id: json['id'] as String, 
        title: json['title'] as String?,
        description: json['description'] as String?,
        originType: OriginType.values[json['originType'] as int], 
        dataType: DataType.values[json['dataType'] as int], 
        data: json['data'] as Map<String, dynamic>
      );
    } catch (e) {
      throw FormatException('Effect model is invalid.', e);
    }
  }
}