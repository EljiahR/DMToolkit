using DMToolkit.Models.Items.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class ItemCategoryConfiguration : IEntityTypeConfiguration<ItemCategory>
{
    public void Configure(EntityTypeBuilder<ItemCategory> builder)
    {
        // Many-to-one ItemCategory <- ItemCategoryItemBases
        builder.HasMany(ic => ic.ItemCategoryItemBases)
            .WithOne(icib => icib.ItemCategory)
            .HasForeignKey(icib => icib.ItemCategoryId);
    }
}