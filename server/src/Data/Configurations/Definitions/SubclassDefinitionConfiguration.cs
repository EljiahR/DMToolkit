using DMToolkit.Models.Definitions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class SubclassDefinitionConfiguration : IEntityTypeConfiguration<SubclassDefinition>
{
    public void Configure(EntityTypeBuilder<SubclassDefinition> builder)
    {
        // Many-to-one SubclassDefinition <- FeatDefinitionSubclassDefinitions
        builder.HasMany(sd => sd.FeatDefinitionSubclassDefinitions)
            .WithOne(fdsc => fdsc.SubclassDefinition)
            .HasForeignKey(fdsc => fdsc.SubclassDefinitionId);
    }
}