using DMToolkit.Data.Configurations;
using DMToolkit.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DMToolkit.Data;

public class DMDbContext : IdentityDbContext<DMUser>
{
    public DMDbContext(DbContextOptions<DMDbContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        // Generic configurations (Join Table keys, Instance to Definition hookups)
        builder.ApplyConfigurationsFromAssembly(typeof(DMDbContext).Assembly);

        // Definition configurations
        builder.ApplyConfiguration(new AbilityScoreDefinitionConfiguration());
        builder.ApplyConfiguration(new CharacterClassDefinitionConfiguration());
        builder.ApplyConfiguration(new FeatDefinitionConfiguration());
        builder.ApplyConfiguration(new LineageDefinitionConfiguration());
        builder.ApplyConfiguration(new SpeciesDefinitionConfiguration());
        builder.ApplyConfiguration(new SubclassDefinitionConfiguration());

        // Entity configurations
        builder.ApplyConfiguration(new FeatEffectConfiguration());
        builder.ApplyConfiguration(new SchoolConfiguration());
        builder.ApplyConfiguration(new SpellConfiguration());
        builder.ApplyConfiguration(new SpellEffectConfiguration());

        // Instance Configurations
        builder.ApplyConfiguration(new AbilityScoreInstanceConfiguration());
        builder.ApplyConfiguration(new CharacterClassInstanceConfiguration());
        builder.ApplyConfiguration(new CharacterConfiguration());
        builder.ApplyConfiguration(new FeatInstanceConfiguration());
        builder.ApplyConfiguration(new LineageInstanceConfiguration());
        builder.ApplyConfiguration(new SpeciesInstanceConfiguration());
        builder.ApplyConfiguration(new SubclassInstanceConfiguration());

        // Item Base Configurations
        builder.ApplyConfiguration(new ItemBaseConfiguration());

        // Item Definition Configurations
        builder.ApplyConfiguration(new WeaponDefinitionConfiguration());

        // Item Entity Configurations
        builder.ApplyConfiguration(new WeaponPropertyConfiguration());

        base.OnModelCreating(builder);
    }
}