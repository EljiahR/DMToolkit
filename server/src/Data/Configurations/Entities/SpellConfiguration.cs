using DMToolkit.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class SpellConfiguration : IEntityTypeConfiguration<Spell>
{
    public void Configure(EntityTypeBuilder<Spell> builder)
    {
        // Many-to-one Spell <- SpellSchools
        builder.HasMany(s => s.SpellSchools)
            .WithOne(ss => ss.Spell)
            .HasForeignKey(ss => ss.SpellId);

        // Many-to-one Spell <- SpellCharacterClassDefinitions
        builder.HasMany(s => s.SpellCharacterClassDefinitions)
            .WithOne(sccd => sccd.Spell)
            .HasForeignKey(sccd => sccd.SpellId);

        // Many-to-one Spell <- SpellItems
        builder.HasMany(s => s.SpellItems)
            .WithOne(si => si.Spell)
            .HasForeignKey(si => si.SpellId);

        // Many-to-one Spell <- SpellEffectSpells
        builder.HasMany(s => s.SpellEffectSpells)
            .WithOne(ses => ses.Spell)
            .HasForeignKey(ses => ses.SpellId);
    }
}