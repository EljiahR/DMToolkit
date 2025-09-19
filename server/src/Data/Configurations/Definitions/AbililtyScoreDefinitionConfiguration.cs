using DMToolkit.Models.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class AbilityScoreDefinitionConfiguration : IEntityTypeConfiguration<AbilityScoreDefinition>
{
    public void Configure(EntityTypeBuilder<AbilityScoreDefinition> builder)
    {
        // Many-to-one AbilityScoreDefinition <- SkillDefinitions
        builder.HasMany(asd => asd.SkillDefinitions)
            .WithOne(sd => sd.AbilityScoreDefinition)
            .HasForeignKey(sd => sd.AbilityScoreDefinitionId);
    }
}