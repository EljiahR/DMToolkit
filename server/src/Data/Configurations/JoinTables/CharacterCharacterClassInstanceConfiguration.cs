using DMToolkit.API.Models.DMToolkitModels.JoinTables;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.JoinTables;

public class CharacterCharacterClassInstanceConfiguration : JoinTableKeyConfiguration<CharacterCharacterClassInstance>
{
    protected override void ExtraConfigure(EntityTypeBuilder<CharacterCharacterClassInstance> builder)
    {
        builder.Property(t => t.HpRolls)
            .HasConversion(
                v => string.Join(',', v),
                v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList(),
                new ValueComparer<List<int>>(
                    (c1, c2) => c1.SequenceEqual(c2),
                    c => c.Aggregate(0, (hash, value) => HashCode.Combine(hash, value.GetHashCode())),
                    c => c.ToList()
                )
            );
    }
}