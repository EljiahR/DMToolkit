using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class CharacterClassInstanceConfiguration : IEntityTypeConfiguration<CharacterClassInstance>
{
    public void Configure(EntityTypeBuilder<CharacterClassInstance> builder)
    {
        // Many-to-one CharacterClassInstance < - FeatInstanceCharacterClassInstances
        builder.HasMany(e => e.FeatInstanceCharacterClassInstances)
            .WithOne(j => j.CharacterClassInstance)
            .HasForeignKey(j => j.CharacterClassInstanceId);
        // One-to-one CharacterClassInstance < - > SubclassInstance
        builder.HasOne(e => e.SubclassInstance)
            .WithOne(ee => ee.CharacterClassInstance)
            .HasForeignKey<CharacterClassInstance>(e => e.SubclassInstanceId);
    }
}