import 'dart:developer';

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

  Future<StartupData?> fetchStartupData() async {
    return await _fetchStartupData();
  }
}