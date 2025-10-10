using DMToolkit.Models.Definitions;
using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class SpeciesInstanceConfiguration : GenericInstanceConfiguration<SpeciesInstance, SpeciesDefinition>
{
    protected override void ExtraConfigure(EntityTypeBuilder<SpeciesInstance> builder)
    {
        // One-to-one SpeciesInstance < - > LineageInstance
        builder.HasOne(s => s.LineageInstance)
            .WithOne(l => l.SpeciesInstance)
            .HasForeignKey<SpeciesInstance>(s => s.LineageInstanceId);
    }
}