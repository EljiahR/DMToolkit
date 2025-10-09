using System.Text.Json;
using DMToolkit.Data.Configurations;
using DMToolkit.Models;
using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;
using DMToolkit.Models.Instances;
using DMToolkit.Models.JoinTables;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

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
    public DbSet<LineageDefinition> LineageDefinitions { get; set; }
    public DbSet<SkillDefinition> SkillDefinitions { get; set; }
    public DbSet<SpeciesDefinition> SpeciesDefinitions { get; set; }

    // Entities
    public DbSet<FeatEffect> FeatEffects { get; set; }
    public DbSet<School> Schools { get; set; }
    public DbSet<Spell> Spells { get; set; }
    public DbSet<SpellEffect> SpellEffects { get; set; }

    // Instances
    public DbSet<Character> Characters { get; set; }

    // Join Tables
    public DbSet<FeatDefinitionFeatEffect> FeatDefinitionFeatEffects { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        var isSqlite = Database.ProviderName == "MicrosoftEntityFrameworkCore.Sqlite";

        var converter = new ValueConverter<Dictionary<string, object>, string>(
            v => JsonSerializer.Serialize(v, (JsonSerializerOptions?)null),
            v => JsonSerializer.Deserialize<Dictionary<string, object>>(v, (JsonSerializerOptions?)null) ?? new()
        );

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

        // Data Json Converter
        builder.Entity<FeatEffect>()
            .Property(e => e.Data)
            .HasConversion(converter)
            .HasColumnType(isSqlite ? "TEXT" : "jsonb");

        builder.Entity<SpellEffect>()
            .Property(e => e.Data)
            .HasConversion(converter)
            .HasColumnType(isSqlite ? "TEXT" : "jsonb");

        base.OnModelCreating(builder);
    }
}