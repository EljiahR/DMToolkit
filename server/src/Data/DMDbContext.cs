using System.Text.Json;
using DMToolkit.Data.Configurations;
using DMToolkit.Models;
using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;
using DMToolkit.Models.Instances;
using DMToolkit.Models.JoinTables;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DMToolkit.Data;

public class DMDbContext : IdentityDbContext<DMUser>
{
    private readonly ILogger<DMDbContext> _logger;
    public DMDbContext(DbContextOptions<DMDbContext> options, ILogger<DMDbContext> logger) : base(options)
    {
        _logger = logger;
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
    public DbSet<CharacterClassDefinitionFeatDefinition> CharacterClassDefinitionFeatDefinitions { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        var isSqlite = Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite";

        if (isSqlite)
        {
            _logger.LogInformation("Configuring for Sqlite...");
        } else
        {
            _logger.LogInformation("Configuring for {DBProvider}...", Database.ProviderName);
        }

        var converter = new ValueConverter<Dictionary<string, object>, string>(
            v => JsonSerializer.Serialize(v, (JsonSerializerOptions?)null),
            v => JsonSerializer.Deserialize<Dictionary<string, object>>(v, (JsonSerializerOptions?)null) ?? new()
        );

        var dictionaryComparer = new ValueComparer<Dictionary<string, object>>(
            (list1, list2) => list1!.SequenceEqual(list2!),
            list => list.Aggregate(0, (currentHash, next) => HashCode.Combine(currentHash, next)),
            list => list.ToDictionary());

        // Definition configurations
        _logger.LogInformation("Applying definition configurations...");
        builder.ApplyConfiguration(new AbilityScoreDefinitionConfiguration());
        builder.ApplyConfiguration(new CharacterClassDefinitionConfiguration());
        builder.ApplyConfiguration(new FeatDefinitionConfiguration());
        builder.ApplyConfiguration(new SpeciesDefinitionConfiguration());

        // Entity configurations
        _logger.LogInformation("Applying entity configurations...");
        builder.ApplyConfiguration(new FeatEffectConfiguration());
        builder.ApplyConfiguration(new SpellConfiguration());

        // Instance Configurations
        _logger.LogInformation("Applying instance configurations...");
        builder.ApplyConfiguration(new AbilityScoreInstanceConfiguration());
        builder.ApplyConfiguration(new CharacterClassInstanceConfiguration());
        builder.ApplyConfiguration(new CharacterConfiguration());
        builder.ApplyConfiguration(new SpeciesInstanceConfiguration());

        // Item Base Configurations
        _logger.LogInformation("Applying item configurations...");
        builder.ApplyConfiguration(new ItemBaseConfiguration());

        // Item Entity Configurations
        builder.ApplyConfiguration(new WeaponPropertyConfiguration());

        // Join Table Configurations
        _logger.LogInformation("Applying join table configurations...");
        builder.ApplyConfiguration(new CharacterCharacterClassInstanceConfiguration());
        builder.ApplyConfiguration(new CharacterClassDefinitionFeatDefinitionConfiguration());
        builder.ApplyConfiguration(new CharacterClassDefinitionItemBaseConfiguration());
        builder.ApplyConfiguration(new CharacterItemBaseConfiguration());
        builder.ApplyConfiguration(new CharacterSpellConfiguration());
        builder.ApplyConfiguration(new FeatDefinitionFeatEffectConfiguration());
        builder.ApplyConfiguration(new SpellItemConfiguration());
        builder.ApplyConfiguration(new SubclassDefinitionFeatDefinitionConfiguration());

        // Data Json Converter
        _logger.LogInformation("Applying conversions...");
        builder.Entity<FeatEffect>()
            .Property(e => e.Data)
            .HasConversion(converter)
            .HasColumnType(isSqlite ? "TEXT" : "jsonb")
            .Metadata.SetValueComparer(dictionaryComparer);

        builder.Entity<SpellEffect>()
            .Property(e => e.Data)
            .HasConversion(converter)
            .HasColumnType(isSqlite ? "TEXT" : "jsonb")
            .Metadata.SetValueComparer(dictionaryComparer);
            

        _logger.LogInformation("Finished adding configurations.");
        base.OnModelCreating(builder);
    }
}