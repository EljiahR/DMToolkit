using DMToolkit.API.Models.DMToolkitModels.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.Definitions;

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