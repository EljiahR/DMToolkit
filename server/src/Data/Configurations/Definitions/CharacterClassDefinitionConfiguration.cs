using DMToolkit.Models.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class CharacterClassDefinitionConfiguration : IEntityTypeConfiguration<CharacterClassDefinition>
{
    public void Configure(EntityTypeBuilder<CharacterClassDefinition> builder)
    {
        // Many-to-one CharacterClassDefinition <- SubclassDefinitions
        builder.HasMany(ccd => ccd.SubclassDefinitions)
            .WithOne(sd => sd.CharacterClassDefinition)
            .HasForeignKey(sd => sd.CharacterClassDefinitionId);
    }
}