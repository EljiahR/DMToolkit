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
    extends $NotifierProvider<DMToolkit, StartupData> {
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

  /// {@macro riverpod.override_with_value}
  Override overrideWithValue(StartupData value) {
    return $ProviderOverride(
      origin: this,
      providerOverride: $SyncValueProvider<StartupData>(value),
    );
  }
}

String _$dMToolkitHash() => r'0b3e9310d773cd28c429609f7755817cd7624e29';

abstract class _$DMToolkit extends $Notifier<StartupData> {
  StartupData build();
  @$mustCallSuper
  @override
  void runBuild() {
    final created = build();
    final ref = this.ref as $Ref<StartupData, StartupData>;
    final element =
        ref.element
            as $ClassProviderElement<
              AnyNotifier<StartupData, StartupData>,
              StartupData,
              Object?,
              Object?
            >;
    element.handleValue(ref, created);
  }
}
