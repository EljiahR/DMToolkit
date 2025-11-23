using DMToolkit.API.Models.DMToolkitModels.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.Definitions;

public class CharacterClassDefinitionConfiguration : IEntityTypeConfiguration<CharacterClassDefinition>
{
    public void Configure(EntityTypeBuilder<CharacterClassDefinition> builder)
    {
        // Many-to-one CharacterClassDefinition <- SubclassDefinitions
        builder.HasMany(ccd => ccd.SubclassDefinitions)
            .WithOne(sd => sd.CharacterClassDefinition)
            .HasForeignKey(sd => sd.CharacterClassDefinitionId);

        builder.HasMany(c => c.SavingThrowProficiencies)
            .WithMany();

        builder.HasMany(c => c.SkillProficiencies)
            .WithMany();

        builder.HasOne(c => c.ToolProficiency)
            .WithMany();

        builder.HasOne(c => c.SpellcastingAbility)
            .WithMany()
            .HasForeignKey(c => c.SpellcastingAbilityId);

        builder.HasOne(c => c.SpellcastingFocus)
            .WithMany()
            .HasForeignKey(c => c.SpellcastingFocusId);
    }
}