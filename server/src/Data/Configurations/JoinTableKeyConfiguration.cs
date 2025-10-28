using DMToolkit.API.Models.DMToolkitModels.JoinTables;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations;

public class JoinTableKeyConfiguration<TEntity> : IEntityTypeConfiguration<TEntity>
    where TEntity : class, IJoinTable
{
    public void Configure(EntityTypeBuilder<TEntity> builder)
    {
        var keyProps = typeof(TEntity)
            .GetProperties()
            .Where(p => p.Name.EndsWith("Id"))
            .ToArray();

        if (keyProps.Length == 2)
        {
            builder.HasKey(keyProps.Select(p => p.Name).ToArray());
        }

        ExtraConfigure(builder);
    }

    protected virtual void ExtraConfigure(EntityTypeBuilder<TEntity> builder)
    { }
}