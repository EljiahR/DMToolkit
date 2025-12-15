import 'package:dm_toolkit/enums/armor_category.dart';
import 'package:dm_toolkit/enums/tool_category.dart';
import 'package:dm_toolkit/enums/weapon_category.dart';
import 'package:dm_toolkit/helpers/json_list_to_primitive.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/ability_score_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/feat_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/skill_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/definitions/subclass_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/bases/item_definition_base.dart';
import 'package:dm_toolkit/models/dm_toolkit/items/definitions/tool_definition.dart';
import 'package:dm_toolkit/models/dm_toolkit/join_tables/feat_group_level.dart';
import 'package:dm_toolkit/models/dm_toolkit/join_tables/item_definition_base_quantity.dart';

class CharacterClassDefinition {
  String id;
  String name;
  String description;
  AbilityScoreDefinition? primaryAbilityScoreDefinition;
  AbilityScoreDefinition? alternativePrimaryAbilityScoreDefinition;
  bool primaryAbilityScoreIsExclusive;
  int hitDie;
  List<AbilityScoreDefinition> savingThrowProficiencies;
  List<SkillDefinition> skillProficiencies;
  int numberOfSkillProficiencies;
  List<WeaponCategory> weaponProficiencies;
  List<String> extraWeaponProficiencies;
  ToolDefinition? toolProficiency;
  List<ToolCategory> toolProficiencyCategories;
  int numberOfToolProficiencies;
  List<ArmorCategory> armorProficiencies;
  List<ItemDefinitionBaseQuantity> startingEquipmentQuantityTables;
  int startingGp;
  List<FeatGroupLevel> featTables;
  List<SubclassDefinition> subclassDefinitions;
  List<int> numberOfPreparedSpells;
  List<int> numberOfCantrips;
  List<int> levelOneSlots;
  List<int> levelTwoSlots;
  List<int> levelThreeSlots;
  List<int> levelFourSlots;
  List<int> levelFiveSlots;
  List<int> levelSixSlots;
  List<int> levelSevenSlots;
  List<int> levelEightSlots;
  List<int> levelNineSlots;
  AbilityScoreDefinition? spellcastingAbility;
  ItemDefinitionBase? spellcastingFocus;
  bool hasSpellbook;
  List<int> classPoints;
  List<int> classDieNumber;
  List<int> classDieSides;
  List<int> weaponMasteries;
  List<int> classBonus;
  int defaultStr;
  int defaultDex;
  int defaultCon;
  int defaultInt;
  int defaultWis;
  int defaultCha;
  int fixedHp;
  bool multiGetsMartialProficiency;
  List<ArmorCategory> multiGetsArmorProficiency;
  bool multiGetsSkillProficiency;
  bool multiGetsAToolProficiency;
  ToolCategory multiToolProficiencyCategory;
  int multiSpellSlotDenominator;

  CharacterClassDefinition({
    required this.id,
    required this.name,
    required this.description,
    required this.primaryAbilityScoreDefinition,
    required this.alternativePrimaryAbilityScoreDefinition,
    required this.primaryAbilityScoreIsExclusive,
    required this.hitDie,
    required this.savingThrowProficiencies,
    required this.skillProficiencies,
    required this.numberOfSkillProficiencies,
    required this.weaponProficiencies,
    required this.extraWeaponProficiencies,
    required this.toolProficiency,
    required this.toolProficiencyCategories,
    required this.numberOfToolProficiencies,
    required this.armorProficiencies,
    required this.startingEquipmentQuantityTables,
    required this.startingGp,
    required this.featTables,
    required this.subclassDefinitions,
    required this.numberOfPreparedSpells,
    required this.numberOfCantrips,
    required this.levelOneSlots,
    required this.levelTwoSlots,
    required this.levelThreeSlots,
    required this.levelFourSlots,
    required this.levelFiveSlots,
    required this.levelSixSlots,
    required this.levelSevenSlots,
    required this.levelEightSlots,
    required this.levelNineSlots,
    required this.spellcastingAbility,
    required this.spellcastingFocus,
    required this.hasSpellbook,
    required this.classPoints,
    required this.classDieNumber,
    required this.classDieSides,
    required this.weaponMasteries,
    required this.classBonus,
    required this.defaultStr,
    required this.defaultDex,
    required this.defaultCon,
    required this.defaultInt,
    required this.defaultWis,
    required this.defaultCha,
    required this.fixedHp,
    required this.multiGetsMartialProficiency,
    required this.multiGetsArmorProficiency,
    required this.multiGetsSkillProficiency,
    required this.multiGetsAToolProficiency,
    required this.multiToolProficiencyCategory,
    required this.multiSpellSlotDenominator,
  });

  factory CharacterClassDefinition.fromJson(Map<String, dynamic> json, List<AbilityScoreDefinition> abilityScoreDefinitions, List<SkillDefinition> skillDefinitions, List<ItemDefinitionBase> itemDefinitionBases, List<FeatDefinition> featDefinitions) {
    try {
      var primaryAbilityScoreDefinitionId = json['primaryAbilityScoreDefinitionId'] as String;
      var primaryAbilityScoreDefinition = abilityScoreDefinitions.firstWhere((abilityScoreDefinition) => abilityScoreDefinition.id == primaryAbilityScoreDefinitionId);

      var alternativePrimaryAbilityScoreDefinitionId = json['alternativePrimaryAbilityScoreDefinitionId'] as String?;
      var alternativePrimaryAbilityScoreDefinition = alternativePrimaryAbilityScoreDefinitionId != null ? abilityScoreDefinitions.firstWhere((abilityScore) => abilityScore.id == alternativePrimaryAbilityScoreDefinitionId) : null;
      
      var savingThrowProficiencyIdListJson = json['savingThrowProficiencyIds'] as List;
      var savingThrowProficiencies = savingThrowProficiencyIdListJson
        .map((savingThrowProficiencyIdJson) {
          var savingThrowProficiencyId = savingThrowProficiencyIdJson as String;
          return abilityScoreDefinitions.firstWhere((abilityScore) => abilityScore.id == savingThrowProficiencyId);
        })
        .toList();

      var skillProficiencyIdListJson = json['skillProficiencyIds'] as List;
      var skillProficiencies = skillProficiencyIdListJson
        .map((skillProficiencyIdJson) {
          var skillProficiencyId = skillProficiencyIdJson as String;
          return skillDefinitions.firstWhere((skillDefinition) => skillDefinition.id == skillProficiencyId);
        })
        .toList();

      var weaponProficiencyListJson = json['weaponProficiencies'] as List;
      var weaponProficiencies = weaponProficiencyListJson
        .map((weaponProficiencyListJson) => WeaponCategory.values[weaponProficiencyListJson as int])
        .toList();

      var extraWeaponProficiencies = jsonListToPrimitive<String>(json['extraWeaponProficiencies']);
      
      var toolProficiencyId = json['toolProficiencyId'] as String?;
      var toolProficiency = toolProficiencyId != null ? itemDefinitionBases.firstWhere((item) => item.id == toolProficiencyId) : null;

      var toolProficiencyCategoryListJson = json['toolProficiencyCategories'] as List;
      var toolProficiencyCategories = toolProficiencyCategoryListJson
        .map((toolProficiencyCategoryJson) => ToolCategory.values[toolProficiencyCategoryJson as int])
        .toList();

      var armorProficiencyListJson = json['armorProficiencies'] as List;
      var armorProficiencies = armorProficiencyListJson
        .map((armorProficiencyJson) => ArmorCategory.values[armorProficiencyJson as int])
        .toList();

      var startingEquipmentQuantityTableListJson = json['startingEquipmentQuantityTables'] as List;
      var startingEquipmentQuantityTables = startingEquipmentQuantityTableListJson
        .map((startingEquipmentQuantityTableJson) => ItemDefinitionBaseQuantity.fromJson(startingEquipmentQuantityTableJson, itemDefinitionBases))
        .toList();

      var featTableListJson = json['featTables'] as List;
      var featTables = featTableListJson
        .map((featTableJson) => FeatGroupLevel.fromJson(featTableJson, featDefinitions))
        .toList();

      var subclassDefinitionListJson = json['subclassDefinitions'] as List;
      var subclassDefinitions = subclassDefinitionListJson
        .map((subclassDefinitionJson) => SubclassDefinition.fromJson(subclassDefinitionJson, featDefinitions))
        .toList();

      var numberOfPreparedSpells = jsonListToPrimitive<int>(json['numberOfPreparedSpells']);
      var numberOfCantrips = jsonListToPrimitive<int>(json['numberOfCantrips']);
      var levelOneSlots = jsonListToPrimitive<int>(json['levelOneSlots']);
      var levelTwoSlots = jsonListToPrimitive<int>(json['levelTwoSlots']);
      var levelThreeSlots = jsonListToPrimitive<int>(json['levelThreeSlots']);
      var levelFourSlots = jsonListToPrimitive<int>(json['levelFourSlots']);
      var levelFiveSlots = jsonListToPrimitive<int>(json['levelFiveSlots']);
      var levelSixSlots = jsonListToPrimitive<int>(json['levelSixSlots']);
      var levelSevenSlots = jsonListToPrimitive<int>(json['levelSevenSlots']);
      var levelEightSlots = jsonListToPrimitive<int>(json['levelEightSlots']);
      var levelNineSlots = jsonListToPrimitive<int>(json['levelNineSlots']);
      
      var spellcastingAbilityId = json['spellcastingAbilityId'] as String?;
      var spellcastingAbility = spellcastingAbilityId != null ? abilityScoreDefinitions.firstWhere((abilityScore) => abilityScore.id == spellcastingAbilityId) : null;

      var spellcastingFocusId = json['spellcastingFocusId'] as String?;
      var spellcastingFocus = spellcastingFocusId != null ? itemDefinitionBases.firstWhere((item) => item.id == spellcastingFocusId) : null;

      var classPoints = jsonListToPrimitive<int>(json['classPoints']);
      var classDieNumber = jsonListToPrimitive<int>(json['classDieNumber']);
      var classDieSides = jsonListToPrimitive<int>(json['classDieSides']);
      var weaponMasteries = jsonListToPrimitive<int>(json['weaponMasteries']);
      var classBonus = jsonListToPrimitive<int>(json['classBonus']);
      var multiGetsArmorProficiencyListJson = json['multiGetsArmorProficiency'] as List;
      var multiGetsArmorProficiency = multiGetsArmorProficiencyListJson
        .map((multiGetsArmorProficiencyJson) => ArmorCategory.values[multiGetsArmorProficiencyJson as int])
        .toList();

      return CharacterClassDefinition(
        id: json['id'] as String, 
        name: json['name'] as String, 
        description: json['description'] as String, 
        primaryAbilityScoreDefinition: primaryAbilityScoreDefinition,
        alternativePrimaryAbilityScoreDefinition: alternativePrimaryAbilityScoreDefinition,
        primaryAbilityScoreIsExclusive: json['primaryScoreIsExclusive'] as bool,
        hitDie: json['hitDie'] as int,
        savingThrowProficiencies: savingThrowProficiencies,
        skillProficiencies: skillProficiencies,
        numberOfSkillProficiencies: json['numberOfSkillProficiencies'] as int,
        weaponProficiencies: weaponProficiencies,
        extraWeaponProficiencies: extraWeaponProficiencies,
        toolProficiency: toolProficiency != null ? toolProficiency as ToolDefinition : null,
        toolProficiencyCategories: toolProficiencyCategories,
        numberOfToolProficiencies: json['numberOfToolProficiencies'] as int,
        armorProficiencies: armorProficiencies,
        startingEquipmentQuantityTables: startingEquipmentQuantityTables,
        startingGp: json['startingGp'] as int,
        featTables: featTables,
        subclassDefinitions: subclassDefinitions,
        numberOfPreparedSpells: numberOfPreparedSpells,
        numberOfCantrips: numberOfCantrips,
        levelOneSlots: levelOneSlots,
        levelTwoSlots: levelTwoSlots,
        levelThreeSlots: levelThreeSlots,
        levelFourSlots: levelFourSlots,
        levelFiveSlots: levelFiveSlots,
        levelSixSlots: levelSixSlots,
        levelSevenSlots: levelSevenSlots,
        levelEightSlots: levelEightSlots,
        levelNineSlots: levelNineSlots,
        spellcastingAbility: spellcastingAbility,
        spellcastingFocus: spellcastingFocus,
        hasSpellbook: json['hasSpellbook'] as bool,
        classPoints: classPoints,
        classDieNumber: classDieNumber,
        classDieSides: classDieSides,
        weaponMasteries: weaponMasteries,
        classBonus: classBonus,
        defaultStr: json['defaultStr'] as int,
        defaultDex: json['defaultDex'] as int,
        defaultCon: json['defaultCon'] as int,
        defaultInt: json['defaultInt'] as int,
        defaultWis: json['defaultWis'] as int,
        defaultCha: json['defaultCha'] as int,
        fixedHp: json['fixedHp'] as int,
        multiGetsMartialProficiency: json['multiGetsMartialProficiency'] as bool,
        multiGetsArmorProficiency: multiGetsArmorProficiency,
        multiGetsSkillProficiency: json['multiGetsSkillProficiency'] as bool,
        multiGetsAToolProficiency: json['multiGetsAToolProficiency'] as bool,
        multiToolProficiencyCategory: ToolCategory.values[json['multiToolProficiencyCategory'] as int],
        multiSpellSlotDenominator: json['multiSpellSlotDenominator'] as int
      );
    } catch (e) {
      throw FormatException('CharacterClassDefinition model is invalid.', e);
    }
  }
}