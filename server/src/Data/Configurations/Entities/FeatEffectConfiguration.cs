using DMToolkit.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class FeatEffectConfiguration : IEntityTypeConfiguration<FeatEffect>
{
    public void Configure(EntityTypeBuilder<FeatEffect> builder)
    {
        // Many-to-one FeatEffect <- FeatDefinitionFeatEffects
        builder.HasMany(fe => fe.FeatDefinitionFeatEffects)
            .WithOne(fdfe => fdfe.FeatEffect)
            .HasForeignKey(fdfe => fdfe.FeatEffectId);

        
    }
}