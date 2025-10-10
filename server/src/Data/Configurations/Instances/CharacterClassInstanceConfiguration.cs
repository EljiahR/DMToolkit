using DMToolkit.Models.Definitions;
using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

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