import 'dart:convert';
import 'dart:developer';
import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart' as http;
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'dm_toolkit_notifier.g.dart';

@riverpod
class DMToolkitNotifier extends _$DMToolkitNotifier {
  @override
  StartupData build() {
    return StartupData();
  }

  Future<void> fetchStartupData() async {
    final url = dotenv.env['SERVER_URL'];
    if (url == null) {
      log('url was null.');
      return;
    } 
    
    log('Fetching data from $url');
    final response = await http.get(Uri.parse('$url/DMToolkit'));
    
    if (response.statusCode == 200) {
      state = StartupData.fromJson(jsonDecode(response.body) as Map<String, dynamic>);
      log('Data successfully retrieved');
    } else {
      log('Data unable to be retrieved');
    }
  }

  Future<void> loadStartupDataFromSeedDataJson() async {
    try {
      final String response = await rootBundle.loadString("assets/dm_seed_data.json");
      state = StartupData.fromJson(jsonDecode(response) as Map<String, dynamic>);
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