using DMToolkit.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class SpellConfiguration : IEntityTypeConfiguration<Spell>
{
    public void Configure(EntityTypeBuilder<Spell> builder)
    {
        // Many-to-one Spell <- SpellItems
        builder.HasMany(s => s.SpellItems)
            .WithOne(si => si.Spell)
            .HasForeignKey(si => si.SpellId);
    }
}