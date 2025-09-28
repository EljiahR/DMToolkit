using DMToolkit.Models.Items.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class WeaponDefinitionConfiguration : IEntityTypeConfiguration<WeaponDefinition>
{
    public void Configure(EntityTypeBuilder<WeaponDefinition> builder)
    {
        // Many-to-one WeaponDefinition <- WeaponDefinitionWeaponProperty
        builder.HasMany(wd => wd.WeaponDefinitionWeaponProperties)
            .WithOne(wdwp => wdwp.WeaponDefinition)
            .HasForeignKey(wdwp => wdwp.WeaponDefinitionId);
        // One-to-many WeaponDefinition -> WeaponProperty (WeaponMastery)
        // Made in WeaponPropertyConfiguration
    }
}