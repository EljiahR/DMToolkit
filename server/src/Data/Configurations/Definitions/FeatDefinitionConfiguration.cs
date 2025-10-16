using DMToolkit.Models.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class FeatDefinitionConfiguration : IEntityTypeConfiguration<FeatDefinition>
{
    public void Configure(EntityTypeBuilder<FeatDefinition> builder)
    {
        // Many-to-one FeatDefinition <- FeatDefinitionFeatEffects
        builder.HasMany(fd => fd.FeatDefinitionEffects)
            .WithOne(fdfe => fdfe.FeatDefinition)
            .HasForeignKey(fdfe => fdfe.FeatDefinitionId);

        // Many-to-one FeatDefinition <- BackgroundDefinitions
        builder.HasMany(fd => fd.BackgroundDefinitions)
            .WithOne(bd => bd.FeatDefinition)
            .HasForeignKey(bd => bd.FeatDefinitionId);
    }
}