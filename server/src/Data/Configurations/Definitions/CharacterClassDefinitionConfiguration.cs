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
            .HasConversion(
                v => string.Join(",", v.Select(e => e.ToString("D")).ToArray()),
                v => v.Split(new[] { ',' })
                    .Select(e =>  Enum.Parse(typeof(ArmorCategory), e))
                    .Cast<ArmorCategory>()
                    .ToList()
            );

        builder.Property(c => c.WeaponProficiencies)
            .HasConversion(
                v => string.Join(",", v.Select(e => e.ToString("D")).ToArray()),
                v => v.Split(new[] { ',' })
                    .Select(e =>  Enum.Parse(typeof(WeaponCategory), e))
                    .Cast<WeaponCategory>()
                    .ToList()
            );

        builder.Property(c => c.ToolProficiencyCategories)
            .HasConversion(
                v => string.Join(",", v.Select(e => e.ToString("D")).ToArray()),
                v => v.Split(new[] { ',' })
                    .Select(e => Enum.Parse(typeof(ToolCategory), e))
                    .Cast<ToolCategory>()
                    .ToList()
            );

        builder.Property(c => c.NumberOfPreparedSpells)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );

        builder.Property(c => c.NumberOfCantrips)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );

        builder.Property(c => c.LevelOneSlots)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );

        builder.Property(c => c.LevelTwoSlots)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );

        builder.Property(c => c.LevelThreeSlots)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );

        builder.Property(c => c.LevelFourSlots)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );

        builder.Property(c => c.LevelFiveSlots)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );

        builder.Property(c => c.LevelSixSlots)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );

        builder.Property(c => c.LevelSevenSlots)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );
        
        builder.Property(c => c.LevelEightSlots)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );

        builder.Property(c => c.LevelNineSlots)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );

        builder.Property(c => c.ClassPoints)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );

        builder.Property(c => c.ClassDieNumber)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );

        builder.Property(c => c.ClassDieSides)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => int.Parse(s))
                    .ToList()
            );
    }
}