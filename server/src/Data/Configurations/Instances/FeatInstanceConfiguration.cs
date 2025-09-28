using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class FeatInstanceConfiguration : IEntityTypeConfiguration<FeatInstance>
{
    public void Configure(EntityTypeBuilder<FeatInstance> builder)
    {
        // Many-to-one FeatInstance <- FeatInstanceFeatEffects
        builder.HasMany(fi => fi.FeatInstanceFeatEffects)
            .WithOne(fife => fife.FeatInstance)
            .HasForeignKey(fife => fife.FeatInstanceId);
    }
}