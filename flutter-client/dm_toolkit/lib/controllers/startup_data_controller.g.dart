// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'startup_data_controller.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint, type=warning

@ProviderFor(StartupDataController)
const startupDataControllerProvider = StartupDataControllerProvider._();

final class StartupDataControllerProvider
    extends $AsyncNotifierProvider<StartupDataController, StartupData> {
  const StartupDataControllerProvider._()
    : super(
        from: null,
        argument: null,
        retry: null,
        name: r'startupDataControllerProvider',
        isAutoDispose: true,
        dependencies: null,
        $allTransitiveDependencies: null,
      );

  @override
  String debugGetCreateSourceHash() => _$startupDataControllerHash();

  @$internal
  @override
  StartupDataController create() => StartupDataController();
}

String _$startupDataControllerHash() =>
    r'1a3a7fb35083e813b0231d9edef2b0006a51817c';

abstract class _$StartupDataController extends $AsyncNotifier<StartupData> {
  FutureOr<StartupData> build();
  @$mustCallSuper
  @override
  void runBuild() {
    final created = build();
    final ref = this.ref as $Ref<AsyncValue<StartupData>, StartupData>;
    final element =
        ref.element
            as $ClassProviderElement<
              AnyNotifier<AsyncValue<StartupData>, StartupData>,
              AsyncValue<StartupData>,
              Object?,
              Object?
            >;
    element.handleValue(ref, created);
  }
}
