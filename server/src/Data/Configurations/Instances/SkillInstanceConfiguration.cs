using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class SkillInstanceConfiguration : IEntityTypeConfiguration<SkillInstance>
{
    public void Configure(EntityTypeBuilder<SkillInstance> builder)
    {
        // One-to-many SkillInstance -> AbilityScoreInstance
        // Made in AbilityScoreInstanceConfiguration
        // One-to-many SkillInstance -> SkillDefinition
        builder.HasOne(i => i.Definition)
            .WithMany()
            .HasForeignKey(i => i.DefinitionId);
    }
}