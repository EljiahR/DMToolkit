using DMToolkit.Models.Items.Bases;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class ItemBaseConfiguration : IEntityTypeConfiguration<ItemBase>
{
    public void Configure(EntityTypeBuilder<ItemBase> builder)
    {
        // Many-to-one ItemBase <- ItemCategoryItemBases
        builder.HasMany(ib => ib.ItemCategoryItemBases)
            .WithOne(icib => icib.ItemBase)
            .HasForeignKey(icib => icib.ItemBaseId);
    }
}