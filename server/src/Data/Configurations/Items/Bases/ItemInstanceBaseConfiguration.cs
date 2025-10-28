using DMToolkit.API.Models.DMToolkitModels.Items.Bases;
using DMToolkit.API.Models.DMToolkitModels.Items.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.Items.Bases;

public class ItemInstanceBaseConfiguration : IEntityTypeConfiguration<ItemInstanceBase>
{
    public void Configure(EntityTypeBuilder<ItemInstanceBase> builder)
    {
        builder.HasDiscriminator<string>("ItemType")
            .HasValue<WeaponInstance>("Weapon")
            .HasValue<ArmorInstance>("Armor");
    }
}