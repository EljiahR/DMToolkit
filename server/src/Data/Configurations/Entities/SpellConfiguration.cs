using DMToolkit.API.Models.DMToolkitModels.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.Entities;

public class SpellConfiguration : IEntityTypeConfiguration<Spell>
{
    public void Configure(EntityTypeBuilder<Spell> builder)
    {
        // Many-to-one Spell <- SpellItems
        builder.HasMany(s => s.SpellItems)
            .WithOne(si => si.Spell)
            .HasForeignKey(si => si.SpellId);

        // One-to-many Spells -> Schools
        builder.HasOne(s => s.School)
            .WithMany(c => c.Spells)
            .HasForeignKey(s => s.SchoolId);
    }
}