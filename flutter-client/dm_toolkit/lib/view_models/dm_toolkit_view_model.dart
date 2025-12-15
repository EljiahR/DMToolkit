import 'dart:convert';
import 'dart:developer';

import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart' as http;

class DMToolkitViewModel extends ChangeNotifier{
  final StartupData data = StartupData();
  String? errorMessage;

  Future<void> fetchStartupData() async {
    
    final url = dotenv.env['SERVER_URL'];
    if (url == null) {
      errorMessage = '.env SERVER_URL was null.';
      log('url was null.');
      return;
    } 
    
    log('Fetching data from $url');
    final response = await http.get(Uri.parse('$url/DMToolkit'));
    
    if (response.statusCode == 200) {
      data.importFromJson(jsonDecode(response.body) as Map<String, dynamic>);
      log('Data successfully retrieved');
    } else {
      errorMessage = 'Error: Data was unable to be retrieved';
      log('Data unable to be retrieved');
    }

    notifyListeners();
  }
}