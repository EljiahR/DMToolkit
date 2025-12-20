import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';
import 'package:dm_toolkit/services/startup_data_service.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'startup_data_controller.g.dart';

@riverpod
class StartupDataController extends _$StartupDataController {
  @override
  Future<StartupData> build() async {
    return StartupData();
  }

  Future<void> init({bool forceJson = false}) async {
    state = AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      var data = await ref.watch(startupDataServiceProvider).fetchStartupData(forceJson: forceJson);  
      if (data != null) {
        return data;
      }
      return state.requireValue;
    });
    
  }
}