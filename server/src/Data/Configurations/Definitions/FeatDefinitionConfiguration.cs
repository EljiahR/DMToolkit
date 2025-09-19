using DMToolkit.Models.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class FeatDefinitionConfiguration : IEntityTypeConfiguration<FeatDefinition>
{
    public void Configure(EntityTypeBuilder<FeatDefinition> builder)
    {
        // Many-to-one FeatDefinition <- FeatDefinitionFeatEffects
        builder.HasMany(fd => fd.FeatDefinitionFeatEffects)
            .WithOne(fdfe => fdfe.FeatDefinition)
            .HasForeignKey(fdfe => fdfe.FeatDefinitionId);

        // Many-to-one FeatDefinition <- FeatDefinitionCharacterClassDefinitions
        builder.HasMany(fd => fd.FeatDefinitionCharacterClassDefinitions)
            .WithOne(fdccd => fdccd.FeatDefinition)
            .HasForeignKey(fdccd => fdccd.FeatDefinitionId);

        // Many-to-one FeatDefinition <- FeatDefinitionLineageDefinitions
        builder.HasMany(fd => fd.FeatDefinitionLineageDefinitions)
            .WithOne(fdld => fdld.FeatDefinition)
            .HasForeignKey(fdld => fdld.FeatDefinitionId);

        // Many-to-one FeatDefinition <- FeatDefinitionSpeciesDefinitions
        builder.HasMany(fd => fd.FeatDefinitionSpeciesDefinitions)
            .WithOne(fdsd => fdsd.FeatDefinition)
            .HasForeignKey(fdsd => fdsd.FeatDefinitionId);

        // Many-to-one FeatDefinition <- FeatDefinitionSubclassDefinitions
        builder.HasMany(fd => fd.FeatDefinitionSubclassDefinitions)
            .WithOne(fdsd => fdsd.FeatDefinition)
            .HasForeignKey(fdsd => fdsd.FeatDefinitionId);

        // Many-to-one FeatDefinition <- BackgroundDefinitions
        builder.HasMany(fd => fd.BackgroundDefinitions)
            .WithOne(bd => bd.FeatDefinition)
            .HasForeignKey(bd => bd.FeatDefinitionId);
    }
}