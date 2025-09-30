using DMToolkit.Models.Items.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class WeaponPropertyConfiguration : IEntityTypeConfiguration<WeaponProperty>
{
    public void Configure(EntityTypeBuilder<WeaponProperty> builder)
    {
        // Many-to-one WeaponPropery <- WeaponDefinition
        builder.HasMany(wp => wp.WeaponMasteries)
            .WithOne(wm => wm.WeaponMastery)
            .HasForeignKey(wm => wm.WeaponMasteryId);
    }
}