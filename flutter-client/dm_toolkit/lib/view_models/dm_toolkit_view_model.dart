import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';
import 'package:flutter/foundation.dart';

class DMToolkitViewModel  extends ChangeNotifier{
  StartupData? data;
  String? errorMessage;

  Future<void> init() async {
    try {
      // Get json here
      Map<String, dynamic> json = { "junk": "junk" };
      data = StartupData.fromJson(json);
    } catch (e) {
      errorMessage = 'Could not get inital startup data.';
    }
    notifyListeners();
  }
}