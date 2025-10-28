using DMToolkit.API.Models.DMToolkitModels.Definitions;
using DMToolkit.API.Models.DMToolkitModels.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.Instances;

public class GenericInstanceConfiguration<TEntity, TDefinition> : IEntityTypeConfiguration<TEntity>
    where TEntity : class, IDefinitionInstance<TDefinition>
    where TDefinition : class, IDefinition
{
    public void Configure(EntityTypeBuilder<TEntity> builder)
    {
        // One-to-many
        builder.HasOne(instance => instance.Definition)
            .WithMany()
            .HasForeignKey(instance => instance.DefinitionId);

        ExtraConfigure(builder);
    }

    protected virtual void ExtraConfigure(EntityTypeBuilder<TEntity> builder)
    {
    }
}