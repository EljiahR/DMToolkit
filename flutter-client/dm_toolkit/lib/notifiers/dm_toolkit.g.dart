// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'dm_toolkit.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint, type=warning

@ProviderFor(DMToolkit)
const dMToolkitProvider = DMToolkitProvider._();

final class DMToolkitProvider
    extends $AsyncNotifierProvider<DMToolkit, StartupData> {
  const DMToolkitProvider._()
    : super(
        from: null,
        argument: null,
        retry: null,
        name: r'dMToolkitProvider',
        isAutoDispose: true,
        dependencies: null,
        $allTransitiveDependencies: null,
      );

  @override
  String debugGetCreateSourceHash() => _$dMToolkitHash();

  @$internal
  @override
  DMToolkit create() => DMToolkit();
}

String _$dMToolkitHash() => r'd9145453ed410759f934a234b33af3b7012285cb';

abstract class _$DMToolkit extends $AsyncNotifier<StartupData> {
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
