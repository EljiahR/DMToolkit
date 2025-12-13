import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';
import 'package:flutter/foundation.dart';

class DMToolkitViewModel  extends ChangeNotifier{
  final StartupData data = StartupData();
  String? errorMessage;

  Future<void> init() async {
    try {
      // Get json here
      Map<String, dynamic> json = { "junk": "junk" };
      data.importFromJson(json);
    } catch (e) {
      errorMessage = 'Could not get inital startup data.';
    }
    notifyListeners();
  }
}