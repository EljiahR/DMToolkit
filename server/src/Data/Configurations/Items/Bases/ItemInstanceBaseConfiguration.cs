using DMToolkit.Models.Items.Bases;
using DMToolkit.Models.Items.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class ItemInstanceBaseConfiguration : IEntityTypeConfiguration<ItemInstanceBase>
{
    public void Configure(EntityTypeBuilder<ItemInstanceBase> builder)
    {
        builder.HasDiscriminator<string>("ItemType")
            .HasValue<WeaponInstance>("Weapon")
            .HasValue<ArmorInstance>("Armor");
    }
}