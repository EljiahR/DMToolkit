using DMToolkit.API.Models.DMToolkitModels.JoinTables;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.JoinTables;

public class CharacterClassPrimaryAbilityConfiguration : IEntityTypeConfiguration<CharacterClassPrimaryAbility>
{
    public void Configure(EntityTypeBuilder<CharacterClassPrimaryAbility> builder)
    {
        builder.HasOne(p => p.PrimaryAbilityScoreDefinition)
            .WithMany()
            .HasForeignKey(p => p.PrimaryAbilityScoreDefinitionId);

        builder.HasOne(p => p.AlternativePrimaryAbilityScoreDefinition)
            .WithMany()
            .HasForeignKey(p => p.AlternativePrimaryAbilityScoreDefinitionId);
    }
}