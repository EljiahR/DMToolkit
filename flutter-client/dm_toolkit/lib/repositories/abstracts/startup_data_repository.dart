import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';

abstract class StartupDataRepository {
  Future<StartupData?> getStartupData();
}