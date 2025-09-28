using DMToolkit.Data.Configurations;
using DMToolkit.Models;
using DMToolkit.Models.Instances;
using DMToolkit.Models.Items.Bases;
using DMToolkit.Models.Items.Definitions;
using DMToolkit.Models.Items.Entities;
using DMToolkit.Models.JoinTables;
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
        // Definition configurations
        builder.ApplyConfiguration(new AbilityScoreDefinitionConfiguration());
        builder.ApplyConfiguration(new CharacterClassDefinitionConfiguration());
        builder.ApplyConfiguration(new FeatDefinitionConfiguration());
        builder.ApplyConfiguration(new LineageDefinitionConfiguration());
        builder.ApplyConfiguration(new SpeciesDefinitionConfiguration());
        builder.ApplyConfiguration(new SubclassDefinitionConfiguration());

        // Entity configurations
        builder.ApplyConfiguration(new FeatDefinitionConfiguration());
        builder.ApplyConfiguration(new SchoolConfiguration());
        builder.ApplyConfiguration(new SpellConfiguration());
        builder.ApplyConfiguration(new SpellEffectConfiguration());

        // Instance Configurations
        builder.ApplyConfiguration(new AbilityScoreInstanceConfiguration());
        builder.ApplyConfiguration(new SkillInstanceConfiguration());

        // Item Base Configurations
        builder.ApplyConfiguration(new ItemBaseConfiguration());

        // Item Definition Configurations
        builder.ApplyConfiguration(new WeaponDefinitionConfiguration());

        // Item Entity Configurations
        builder.ApplyConfiguration(new ItemCategoryConfiguration());
        builder.ApplyConfiguration(new WeaponPropertyConfiguration());

        // Join Table Keys
        builder.ApplyConfiguration(new JoinTableKeyConfiguration<FeatDefinitionCharacterClassDefinition>());
        builder.ApplyConfiguration(new JoinTableKeyConfiguration<FeatDefinitionFeatEffect>());
        builder.ApplyConfiguration(new JoinTableKeyConfiguration<FeatDefinitionLineageDefinition>());
        builder.ApplyConfiguration(new JoinTableKeyConfiguration<FeatDefinitionSpeciesDefinition>());
        builder.ApplyConfiguration(new JoinTableKeyConfiguration<FeatDefinitionSubclassDefinition>());
        builder.ApplyConfiguration(new JoinTableKeyConfiguration<ItemCategoryItemBase>());
        builder.ApplyConfiguration(new JoinTableKeyConfiguration<SpellCharacterClassDefinition>());
        builder.ApplyConfiguration(new JoinTableKeyConfiguration<SpellEffectSpell>());
        builder.ApplyConfiguration(new JoinTableKeyConfiguration<SpellItem>());
        builder.ApplyConfiguration(new JoinTableKeyConfiguration<SpellSchool>());
        builder.ApplyConfiguration(new JoinTableKeyConfiguration<WeaponDefinitionWeaponProperty>());

        base.OnModelCreating(builder);
    }
}