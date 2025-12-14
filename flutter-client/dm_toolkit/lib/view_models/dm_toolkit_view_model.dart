import 'dart:convert';

import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart' as http;

class DMToolkitViewModel extends ChangeNotifier{
  final StartupData data = StartupData();
  String? errorMessage;

  Future<void> init() async {
    
    final url = dotenv.env['SERVER_URL'];
    if (url == null) {
      errorMessage = '.env SERVER_URL was null.';
      return;
    } 
    
    final response = await http.get(Uri.parse(url));
    
    if (response.statusCode == 200) {
      data.importFromJson(jsonDecode(response.body) as Map<String, dynamic>);
    } else {
      errorMessage = 'Error: Data was unable to be retrieved';
    }

    notifyListeners();
  }
}