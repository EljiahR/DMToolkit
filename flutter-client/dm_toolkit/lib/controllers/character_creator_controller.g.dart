// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'character_creator_controller.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint, type=warning

@ProviderFor(CharacterCreatorController)
const characterCreatorControllerProvider =
    CharacterCreatorControllerProvider._();

final class CharacterCreatorControllerProvider
    extends $AsyncNotifierProvider<CharacterCreatorController, Character?> {
  const CharacterCreatorControllerProvider._()
    : super(
        from: null,
        argument: null,
        retry: null,
        name: r'characterCreatorControllerProvider',
        isAutoDispose: false,
        dependencies: null,
        $allTransitiveDependencies: null,
      );

  @override
  String debugGetCreateSourceHash() => _$characterCreatorControllerHash();

  @$internal
  @override
  CharacterCreatorController create() => CharacterCreatorController();
}

String _$characterCreatorControllerHash() =>
    r'a6ef15bb457709abbe5da2c80b4e392cd42887a6';

abstract class _$CharacterCreatorController extends $AsyncNotifier<Character?> {
  FutureOr<Character?> build();
  @$mustCallSuper
  @override
  void runBuild() {
    final created = build();
    final ref = this.ref as $Ref<AsyncValue<Character?>, Character?>;
    final element =
        ref.element
            as $ClassProviderElement<
              AnyNotifier<AsyncValue<Character?>, Character?>,
              AsyncValue<Character?>,
              Object?,
              Object?
            >;
    element.handleValue(ref, created);
  }
}
