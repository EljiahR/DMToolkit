import 'dart:convert';
import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';
import 'package:dm_toolkit/repositories/abstracts/startup_data_repository.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

class JsonStartupDataRepository implements StartupDataRepository {
  Future<StartupData?> getStartupData() async {
    try {
      
      final String response = await rootBundle.loadString("assets/dm_seed_data.json");
      final data = StartupData.fromJson(jsonDecode(response) as Map<String, dynamic>);
      log('Data imported successfully.');

      return data;
    } on FlutterError catch (e) {
      log('Error loading .json:', error: e);
    } on FormatException catch (e) {
      log('Error occured during json import.', error: e);
    } catch (e) {
      log('Unexpected error has occured:', error: e);
    }
  }
}