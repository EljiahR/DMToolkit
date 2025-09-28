using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class SubclassInstanceConfiguration : IEntityTypeConfiguration<SubclassInstance>
{
    public void Configure(EntityTypeBuilder<SubclassInstance> builder)
    {
        // Many-to-one SubclassInstance <- FeatInstanceSubclassInstances
        builder.HasMany(e => e.FeatInstanceSubclassInstances)
            .WithOne(j => j.SubclassInstance)
            .HasForeignKey(j => j.SubclassInstanceId);
        // One-to-one SubclassInstance <-> CharacterClassInstance
        // Setup in CharacterClassInstanceConfiguration
    }
}