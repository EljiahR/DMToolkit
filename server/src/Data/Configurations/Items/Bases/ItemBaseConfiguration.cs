using DMToolkit.Models.Items.Bases;
using DMToolkit.Models.Items.Definitions;
using DMToolkit.Models.Items.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class ItemBaseConfiguration : IEntityTypeConfiguration<ItemBase>
{
    public void Configure(EntityTypeBuilder<ItemBase> builder)
    {
        builder.HasDiscriminator<string>("ItemType")
            .HasValue<Item>("Item")
            .HasValue<WeaponDefinition>("Weapon")
            .HasValue<ArmorDefinition>("Armor");
    }
}