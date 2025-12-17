import 'package:dm_toolkit/models/dm_toolkit/collections/startup_data.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'dm_toolkit_notifier.g.dart';

@riverpod
class DMToolkitNotifier extends _$DMToolkitNotifier {
  @override
  StartupData build() {
    return StartupData();
  }
}