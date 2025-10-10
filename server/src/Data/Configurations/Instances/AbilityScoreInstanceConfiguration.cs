using DMToolkit.Models.Definitions;
using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class AbilityScoreInstanceConfiguration : GenericInstanceConfiguration<AbilityScoreInstance, AbilityScoreDefinition>
{
    protected override void ExtraConfigure(EntityTypeBuilder<AbilityScoreInstance> builder)
    {
        // Many-to-one AbilityScoreInstance <- SkillInstances
        builder.HasMany(a => a.SkillInstances)
            .WithOne(s => s.AbilityScoreInstance)
            .HasForeignKey(s => s.AbilityScoreInstanceId);
    }
}