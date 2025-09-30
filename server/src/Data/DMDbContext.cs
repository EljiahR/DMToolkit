using DMToolkit.Data.Configurations;
using DMToolkit.Models;
using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;
using DMToolkit.Models.Instances;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DMToolkit.Data;

public class DMDbContext : IdentityDbContext<DMUser>
{
    public DMDbContext(DbContextOptions<DMDbContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    // Definitions
    public DbSet<AbilityScoreDefinition> AbilityScoreDefinitions { get; set; }
    public DbSet<BackgroundDefinition> BackgroundDefinitions { get; set; }
    public DbSet<CharacterClassDefinition> CharacterClassDefinitions { get; set; }
    public DbSet<FeatDefinition> FeatDefinitions { get; set; }
    public DbSet<SpeciesDefinition> SpeciesDefinitions { get; set; }

    // Entities
    public DbSet<FeatEffect> FeatEffects { get; set; }
    public DbSet<School> Schools { get; set; }
    public DbSet<Spell> Spells { get; set; }
    public DbSet<SpellEffect> SpellEffects { get; set; }

    // Instances
    public DbSet<Character> Characters { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        // Generic configurations (Join Table keys, Instance to Definition hookups)
        builder.ApplyConfigurationsFromAssembly(typeof(DMDbContext).Assembly);

        // Definition configurations
        builder.ApplyConfiguration(new AbilityScoreDefinitionConfiguration());
        builder.ApplyConfiguration(new CharacterClassDefinitionConfiguration());
        builder.ApplyConfiguration(new FeatDefinitionConfiguration());
        builder.ApplyConfiguration(new SpeciesDefinitionConfiguration());

        // Entity configurations
        builder.ApplyConfiguration(new FeatEffectConfiguration());
        builder.ApplyConfiguration(new SpellConfiguration());

        // Instance Configurations
        builder.ApplyConfiguration(new AbilityScoreInstanceConfiguration());
        builder.ApplyConfiguration(new CharacterClassInstanceConfiguration());
        builder.ApplyConfiguration(new CharacterConfiguration());
        builder.ApplyConfiguration(new SpeciesInstanceConfiguration());

        // Item Base Configurations
        builder.ApplyConfiguration(new ItemBaseConfiguration());

        // Item Entity Configurations
        builder.ApplyConfiguration(new WeaponPropertyConfiguration());

        base.OnModelCreating(builder);
    }
}