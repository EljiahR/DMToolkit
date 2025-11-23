using DMToolkit.API.Models.DMToolkitModels.Items.Bases;
using DMToolkit.API.Models.DMToolkitModels.Items.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.Items.Bases;

public class ItemDefinitionBaseConfiguration : IEntityTypeConfiguration<ItemDefinitionBase>
{
    public void Configure(EntityTypeBuilder<ItemDefinitionBase> builder)
    {
        builder.HasDiscriminator<string>("ItemType")
            .HasValue<ItemDefinition>("Item")
            .HasValue<WeaponDefinition>("Weapon")
            .HasValue<ArmorDefinition>("Armor")
            .HasValue<ToolDefinition>("Tool");
    }
}