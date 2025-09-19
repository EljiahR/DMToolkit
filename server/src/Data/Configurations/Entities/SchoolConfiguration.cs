using DMToolkit.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class SchoolConfiguration : IEntityTypeConfiguration<School>
{
    public void Configure(EntityTypeBuilder<School> builder)
    {
        // Many-to-one School <- SpellSchools
        builder.HasMany(s => s.SpellSchools)
            .WithOne(ss => ss.School)
            .HasForeignKey(ss => ss.SchoolId);
    }
}