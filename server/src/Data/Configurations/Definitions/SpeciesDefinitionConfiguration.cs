using DMToolkit.Models.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class SpeciesDefinitionConfiguration : IEntityTypeConfiguration<SpeciesDefinition>
{
    public void Configure(EntityTypeBuilder<SpeciesDefinition> builder)
    {
        // Many-to-one SpeciesDefinition <- LineageDefinition
        builder.HasMany(sd => sd.LineageDefinitions)
            .WithOne(ld => ld.SpeciesDefinition)
            .HasForeignKey(ld => ld.SpeciesDefinitionId);
    }
}