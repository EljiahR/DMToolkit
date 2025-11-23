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
    }
}