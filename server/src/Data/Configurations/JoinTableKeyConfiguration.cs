using DMToolkit.Models.JoinTables;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class JoinTableKeyConfiguration<TJoin> : IEntityTypeConfiguration<TJoin>
    where TJoin : class, IJoinTable
{
    public void Configure(EntityTypeBuilder<TJoin> builder)
    {
        var keyProps = typeof(TJoin)
            .GetProperties()
            .Where(p => p.Name.EndsWith("Id"))
            .ToArray();

        if (keyProps.Length == 2)
        {
            builder.HasKey(keyProps.Select(p => p.Name).ToArray());
        }
    }   
}