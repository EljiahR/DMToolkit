using DMToolkit.Models.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class LineageDefinitionConfiguration : IEntityTypeConfiguration<LineageDefinition>
{
    public void Configure(EntityTypeBuilder<LineageDefinition> builder)
    {
        // Many-to-one LineageDefinition <- FeatDefinitionLineageDefinitions
        builder.HasMany(ld => ld.FeatDefinitionLineageDefinitions)
            .WithOne(fdld => fdld.LineageDefinition)
            .HasForeignKey(fdld => fdld.LineageDefinitionId);

        // One-to-many LineageDefinition -> SpeciesDefinition
        //// Made in SpeciesDefinition
    }
}