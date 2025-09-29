using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class LineageInstanceConfiguration : IEntityTypeConfiguration<LineageInstance>
{
    public void Configure(EntityTypeBuilder<LineageInstance> builder)
    {
        // One-to-one LineageInstance < - > SpeciesInstance
        // Made in SpeciesInstanceConfiguration

        // Many-to-one LineageInstance <- FeatInstanceLineageInstances
        builder.HasMany(s => s.FeatInstanceLineageInstances)
            .WithOne(f => f.LineageInstance)
            .HasForeignKey(f => f.LineageInstanceId);
    }
}