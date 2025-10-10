using DMToolkit.Models.Definitions;
using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

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