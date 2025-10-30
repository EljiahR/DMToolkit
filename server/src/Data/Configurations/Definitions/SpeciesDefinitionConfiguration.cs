using DMToolkit.API.Models.DMToolkitModels.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.Definitions;

public class SpeciesDefinitionConfiguration : IEntityTypeConfiguration<SpeciesDefinition>
{
    public void Configure(EntityTypeBuilder<SpeciesDefinition> builder)
    {
        // Many-to-one SpeciesDefinition <- LineageDefinition
        builder.HasMany(sd => sd.LineageDefinitions)
            .WithOne(ld => ld.SpeciesDefinition)
            .HasForeignKey(ld => ld.SpeciesDefinitionId);

        builder.Property(s => s.Sizes)
            .HasConversion(
                v => string.Join(',', v),
                v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList(),
                new ValueComparer<List<string>>(
                    (c1, c2) => c1.SequenceEqual(c2),
                    c => c.Aggregate(0, (hash, value) => HashCode.Combine(hash, value.GetHashCode())),
                    c => c.ToList()
                )
            );
    }
}