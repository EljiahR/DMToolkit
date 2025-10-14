using DMToolkit.Models.JoinTables;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class CharacterCharacterClassInstanceConfiguration : JoinTableKeyConfiguration<CharacterCharacterClassInstance>
{
    protected override void ExtraConfigure(EntityTypeBuilder<CharacterCharacterClassInstance> builder)
    {
        builder.Property(t => t.HpRolls)
            .HasConversion(
                v => string.Join(',', v),
                v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList()
            );
    }
}