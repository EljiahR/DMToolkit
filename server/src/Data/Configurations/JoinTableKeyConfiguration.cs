using DMToolkit.Models.JoinTables;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class JoinTableKeyConfiguration<TEntity> : IEntityTypeConfiguration<TEntity>
    where TEntity : class, IJoinTable
{
    private readonly ILogger _logger;

    public JoinTableKeyConfiguration(ILogger logger)
    {
        _logger = logger;
    }
    
    public void Configure(EntityTypeBuilder<TEntity> builder)
    {
        _logger.LogInformation("Creating primary key for {ObjectName} join table", nameof(TEntity));
        var keyProps = typeof(TEntity)
            .GetProperties()
            .Where(p => p.Name.EndsWith("Id"))
            .ToArray();

        if (keyProps.Length == 2)
        {
            builder.HasKey(keyProps.Select(p => p.Name).ToArray());
        }
    }   
}