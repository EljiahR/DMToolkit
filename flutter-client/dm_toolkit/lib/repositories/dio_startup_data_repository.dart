import 'dart:developer';

import 'package:dio/dio.dart';
import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';
import 'package:dm_toolkit/repositories/abstracts/startup_data_repository.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class DioStartupDataRepository implements StartupDataRepository {
  final Dio dio;

  DioStartupDataRepository({
    required this.dio
  });

  @override
  Future<StartupData?> fetchStartupData() async{
    try {
      final url = dotenv.env['SERVER_URL'];
      if (url == null) {
        log('url was null.');
        return null;
      } 
      
      log('Fetching data from $url');
      final response = await dio.get('$url/DMToolkit');
      
      if (response.statusCode == 200) {
        final data = StartupData.fromJson(response as Map<String, dynamic>);
        log('Data successfully retrieved');
        return data;
      } else {
        log('Data unable to be retrieved');
      }
    } catch (e) {
      log('Error retrieving data.');
    }

    return null;
  }
}

final dioStartupDataRepositoryProvider = Provider<StartupDataRepository>((ref) {
  return DioStartupDataRepository(dio: Dio());
});