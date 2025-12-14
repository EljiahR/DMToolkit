using DMToolkit.API.Models.DMToolkitModels.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SharedModels.Enums;

namespace DMToolkit.API.Data.Configurations.Definitions;

public class CharacterClassDefinitionConfiguration : IEntityTypeConfiguration<CharacterClassDefinition>
{
    public void Configure(EntityTypeBuilder<CharacterClassDefinition> builder)
    {
        // Many-to-one CharacterClassDefinition <- SubclassDefinitions
        builder.HasMany(ccd => ccd.SubclassDefinitions)
            .WithOne(sd => sd.CharacterClassDefinition)
            .HasForeignKey(sd => sd.CharacterClassDefinitionId);
        
        builder.HasOne(c => c.PrimaryAbilityScoreDefinition)
            .WithMany()
            .HasForeignKey(c => c.PrimaryAbilityScoreDefinitionId);

        builder.HasOne(c => c.AlternativePrimaryAbilityScoreDefinition)
            .WithMany()
            .HasForeignKey(c => c.AlternativePrimaryAbilityScoreDefinitionId);

        builder.HasMany(c => c.SavingThrowProficiencies)
            .WithMany();

        builder.HasMany(c => c.SkillProficiencies)
            .WithMany();

        builder.HasOne(c => c.ToolProficiency)
            .WithMany()
            .HasForeignKey(c => c.ToolProficiencyId);

        builder.HasOne(c => c.SpellcastingAbility)
            .WithMany()
            .HasForeignKey(c => c.SpellcastingAbilityId);

        builder.HasOne(c => c.SpellcastingFocus)
            .WithMany()
            .HasForeignKey(c => c.SpellcastingFocusId);

        builder.Property(c => c.ArmorProficiencies)
            .HasConversion(ValueConverters.ArmorCategoryListConverter, ValueComparers.ArmorCategoryListComparer
            );

        builder.Property(c => c.WeaponProficiencies)
            .HasConversion(ValueConverters.WeaponCategoryListConverter, ValueComparers.WeaponCategoryListComparer
            );

        builder.Property(c => c.ToolProficiencyCategories)
            .HasConversion(ValueConverters.ToolCategoryListConverter, ValueComparers.ToolCategoryListComparer
            );

        builder.Property(c => c.NumberOfPreparedSpells)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.NumberOfCantrips)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.LevelOneSlots)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.LevelTwoSlots)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.LevelThreeSlots)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.LevelFourSlots)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.LevelFiveSlots)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.LevelSixSlots)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.LevelSevenSlots)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );
        
        builder.Property(c => c.LevelEightSlots)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.LevelNineSlots)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.ClassPoints)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.ClassDieNumber)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.ClassDieSides)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.WeaponMasteries)
            .HasConversion(ValueConverters.IntListConverter, ValueComparers.IntListComparer
            );

        builder.Property(c => c.MultiGetsArmorProficiency)
            .HasConversion(ValueConverters.ArmorCategoryListConverter, ValueComparers.ArmorCategoryListComparer);
    }
}