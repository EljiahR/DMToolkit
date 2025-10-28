using DMToolkit.API.Models.DMToolkitModels.Definitions;
using DMToolkit.API.Models.DMToolkitModels.Instances;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.Instances;

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