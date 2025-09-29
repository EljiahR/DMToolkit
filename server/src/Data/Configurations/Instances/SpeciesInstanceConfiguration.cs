using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class SpeciesInstanceConfiguration : IEntityTypeConfiguration<SpeciesInstance>
{
    public void Configure(EntityTypeBuilder<SpeciesInstance> builder)
    {
        // One-to-one SpeciesInstance < - > LineageInstance
        builder.HasOne(s => s.LineageInstance)
            .WithOne(l => l.SpeciesInstance)
            .HasForeignKey<SpeciesInstance>(s => s.LineageInstanceId);

        // Many-to-one SpeciesInstance <- FeatInstanceSpeciesInstances
        builder.HasMany(s => s.FeatInstanceSpeciesInstances)
            .WithOne(f => f.SpeciesInstance)
            .HasForeignKey(f => f.SpeciesInstanceId);
    }
}