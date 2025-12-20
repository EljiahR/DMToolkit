import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';
import 'package:dm_toolkit/repositories/dio_startup_data_repository.dart';
import 'package:dm_toolkit/repositories/json_startup_data_repository.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class StartupDataService {
  StartupDataService(this.ref);
  final Ref ref;

  Future<StartupData?> _fetchStartupData() async {
    var data = await ref.read(dioStartupDataRepositoryProvider).fetchStartupData();
    if (data == null) {
      return await ref.read(jsonStartupDataRepositoryProvider).fetchStartupData();
    }

    return data;
  }

  Future<StartupData?> _fetchStartupDataJson() async {
    return await ref.read(jsonStartupDataRepositoryProvider).fetchStartupData();
  }

  Future<StartupData?> fetchStartupData({bool forceJson = false}) async {
    if (forceJson) {
      return await _fetchStartupDataJson();
    }
    return await _fetchStartupData();
  }
}

final startupDataServiceProvider = Provider<StartupDataService>((ref) {
  return StartupDataService(ref);
});