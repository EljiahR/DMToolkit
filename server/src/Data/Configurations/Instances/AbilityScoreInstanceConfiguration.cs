using DMToolkit.API.Models.DMToolkitModels.Definitions;
using DMToolkit.API.Models.DMToolkitModels.Instances;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.Instances;

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