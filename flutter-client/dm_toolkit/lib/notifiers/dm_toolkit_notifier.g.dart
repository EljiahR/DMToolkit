// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'dm_toolkit_notifier.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint, type=warning

@ProviderFor(DMToolkitNotifier)
const dMToolkitProvider = DMToolkitNotifierProvider._();

final class DMToolkitNotifierProvider
    extends $NotifierProvider<DMToolkitNotifier, StartupData> {
  const DMToolkitNotifierProvider._()
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
  String debugGetCreateSourceHash() => _$dMToolkitNotifierHash();

  @$internal
  @override
  DMToolkitNotifier create() => DMToolkitNotifier();

  /// {@macro riverpod.override_with_value}
  Override overrideWithValue(StartupData value) {
    return $ProviderOverride(
      origin: this,
      providerOverride: $SyncValueProvider<StartupData>(value),
    );
  }
}

String _$dMToolkitNotifierHash() => r'4c85c649897e9c0f31b673ce1c093acdec61045c';

abstract class _$DMToolkitNotifier extends $Notifier<StartupData> {
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
