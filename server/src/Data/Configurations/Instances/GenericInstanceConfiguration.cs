using DMToolkit.Models.Definitions;
using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class GenericInstanceConfiguration<TEntity> : IEntityTypeConfiguration<TEntity>
    where TEntity : class, IDefinitionInstance<IDefinition>
{
    public void Configure(EntityTypeBuilder<TEntity> builder)
    {
        // One-to-many
        builder.HasOne(instance => instance.Definition)
            .WithMany()
            .HasForeignKey(instance => instance.DefinitionId);
    }
}