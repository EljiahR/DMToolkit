import 'dart:convert';
import 'dart:developer';
import 'package:dio/dio.dart';
import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'dm_toolkit.g.dart';

@riverpod
class DMToolkit extends _$DMToolkit {
  final dio = Dio();
  @override
  Future<StartupData> build() async {
    return StartupData();
  }

  Future<void> fetchStartupData() async {
    try {
      final url = dotenv.env['SERVER_URL'];
      if (url == null) {
        log('url was null.');
        return;
      } 
      
      log('Fetching data from $url');
      final response = await dio.get('$url/DMToolkit');
      
      if (response.statusCode == 200) {
        state = AsyncValue.data(StartupData.fromJson(response as Map<String, dynamic>));
        log('Data successfully retrieved');
      } else {
        log('Data unable to be retrieved');
      }
    } catch (e) {
      log('Error retrieving data.');
    }
    
  }

  Future<void> loadStartupDataFromSeedDataJson() async {
    try {
      state = AsyncValue.loading();
      
      state = await AsyncValue.guard(() async {
        await Future.delayed(Duration(seconds: 2));
        final String response = await rootBundle.loadString("assets/dm_seed_data.json");
        return StartupData.fromJson(jsonDecode(response) as Map<String, dynamic>);
      });
      log('Data imported successfully.');
    } on FlutterError catch (e) {
      log('Error loading .json:', error: e);
    } on FormatException catch (e) {
      log('Error occured during json import.', error: e);
    } catch (e) {
      log('Unexpected error has occured:', error: e);
    }
  }
}

// class DMToolKitNotifierMock extends _$DMToolkitNotifier with Mock implements DMToolkitNotifier {}