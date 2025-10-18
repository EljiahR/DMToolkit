using DMToolkit.Models.Items.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class WeaponDefinitionConfiguration : IEntityTypeConfiguration<WeaponDefinition>
{
    public void Configure(EntityTypeBuilder<WeaponDefinition> builder)
    {
        builder.HasOne(w => w.WeaponMastery)
            .WithMany(w => w.WeaponDefinitionMasteries)
            .HasForeignKey(w => w.WeaponMasteryId);

        builder.HasMany(w => w.WeaponProperties)
            .WithMany(e => e.WeaponDefinitionProperties)
            .UsingEntity(j => j.ToTable("WeaponDefinitionEffects"));
            
    }
}