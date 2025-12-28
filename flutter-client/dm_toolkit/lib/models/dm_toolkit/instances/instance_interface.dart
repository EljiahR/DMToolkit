import 'package:dm_toolkit/models/dm_toolkit/definitions/definition_interface.dart';

abstract interface class IInstance<T extends IDefinition> {
  T get definition;
}