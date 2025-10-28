using DMToolkit.API.Models.DMToolkitModels.Definitions;
using DMToolkit.API.Models.DMToolkitModels.Instances;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.Instances;

public class CharacterClassInstanceConfiguration : GenericInstanceConfiguration<CharacterClassInstance, CharacterClassDefinition>
{
    protected override void ExtraConfigure(EntityTypeBuilder<CharacterClassInstance> builder)
    {
        // One-to-one CharacterClassInstance < - > SubclassInstance
        builder.HasOne(e => e.SubclassInstance)
            .WithOne(ee => ee.CharacterClassInstance)
            .HasForeignKey<CharacterClassInstance>(e => e.SubclassInstanceId);
    }
}