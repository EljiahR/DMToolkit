using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class AbilityScoreInstanceConfiguration : IEntityTypeConfiguration<AbilityScoreInstance>
{
    public void Configure(EntityTypeBuilder<AbilityScoreInstance> builder)
    {
        // Many-to-one AbilityScoreInstance <- SkillInstances
        builder.HasMany(a => a.SkillInstances)
            .WithOne(s => s.AbilityScoreInstance)
            .HasForeignKey(s => s.AbilityScoreInstanceId);
    }
}