using DMToolkit.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class SpellEffectConfiguration : IEntityTypeConfiguration<SpellEffect>
{
    public void Configure(EntityTypeBuilder<SpellEffect> builder)
    {
        // Many-to-one SpellEffect <- SpellEffectSpells
        builder.HasMany(se => se.SpellEffectSpells)
            .WithOne(ses => ses.SpellEffect)
            .HasForeignKey(ses => ses.SpellEffectId);
    }
}