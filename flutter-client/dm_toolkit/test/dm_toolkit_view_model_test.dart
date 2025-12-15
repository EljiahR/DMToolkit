import 'package:flutter_test/flutter_test.dart';
import 'package:provider_test/provider_test.dart';
import 'package:dm_toolkit/view_models/dm_toolkit_view_model.dart';

void main() {
  test('Test DMToolkit able to retrieve from seed data json file.', () async {
    final toolkit = DMToolkitViewModel();

    // Initial
    expect(toolkit.data.abilityScoreDefinitions.isEmpty, true);

    // Act
    await toolkit.loadStartupDataFromSeedDataJson();

    // Assert
    expect(toolkit.data.abilityScoreDefinitions.isEmpty, false);
  });
}