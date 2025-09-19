using DMToolkit.Data.Configurations;
using DMToolkit.Models;
using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;
using DMToolkit.Models.Instances;
using DMToolkit.Models.Items.Bases;
using DMToolkit.Models.Items.Definitions;
using DMToolkit.Models.Items.Entities;
using DMToolkit.Models.JoinTables;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

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

        #region Entites
        builder.ApplyConfiguration(new FeatDefinitionConfiguration());

        // School
        // Many-to-one School <- SpellSchools
        builder.Entity<School>()
            .HasMany(s => s.SpellSchools)
            .WithOne(ss => ss.School)
            .HasForeignKey(ss => ss.SchoolId);

        // Spell
        // Many-to-one Spell <- SpellSchools
        builder.Entity<Spell>()
            .HasMany(s => s.SpellSchools)
            .WithOne(ss => ss.Spell)
            .HasForeignKey(ss => ss.SpellId);
        // Many-to-one Spell <- SpellCharacterClassDefinitions
        builder.Entity<Spell>()
            .HasMany(s => s.SpellCharacterClassDefinitions)
            .WithOne(sccd => sccd.Spell)
            .HasForeignKey(sccd => sccd.SpellId);
        // Many-to-one Spell <- SpellItems
        builder.Entity<Spell>()
            .HasMany(s => s.SpellItems)
            .WithOne(si => si.Spell)
            .HasForeignKey(si => si.SpellId);
        // Many-to-one Spell <- SpellEffectSpells
        builder.Entity<Spell>()
            .HasMany(s => s.SpellEffectSpells)
            .WithOne(ses => ses.Spell)
            .HasForeignKey(ses => ses.SpellId);

        // SpellEffect
        // Many-to-one SpellEffect <- SpellEffectSpells
        builder.Entity<SpellEffect>()
            .HasMany(se => se.SpellEffectSpells)
            .WithOne(ses => ses.SpellEffect)
            .HasForeignKey(ses => ses.SpellEffectId);

        #endregion
        #region Instances

        // AbilityScoreInstance
        // One-to-many AbilityScoreInstance -> AbilityScoreDefinition
        builder.Entity<AbilityScoreInstance>()
            .HasOne(i => i.Definition)
            .WithMany()
            .HasForeignKey(i => i.DefinitionId);
        // Many-to-one AbilityScoreInstance <- SkillInstances
        builder.Entity<AbilityScoreInstance>()
            .HasMany(a => a.SkillInstances)
            .WithOne(s => s.AbilityScoreInstance)
            .HasForeignKey(s => s.AbilityScoreInstanceId);



        // SkillInstance
        // One-to-many SkillInstance -> AbilityScoreInstance
        // Made in AbilityScoreInstance
        // One-to-many SkillInstance -> SkillDefinition
        builder.Entity<SkillInstance>()
            .HasOne(i => i.Definition)
            .WithMany()
            .HasForeignKey(i=> i.DefinitionId);

        #endregion
        #region Item-Bases

        // ItemBase
        // Many-to-one ItemBase <- ItemCategoryItemBases
        builder.Entity<ItemBase>()
            .HasMany(ib => ib.ItemCategoryItemBases)
            .WithOne(icib => icib.ItemBase)
            .HasForeignKey(icib => icib.ItemBaseId);

        #endregion
        #region Item-Definitions

        // WeaponDefinition
        // Many-to-one WeaponDefinition <- WeaponDefinitionWeaponProperty
        builder.Entity<WeaponDefinition>()
            .HasMany(wd => wd.WeaponDefinitionWeaponProperties)
            .WithOne(wdwp => wdwp.WeaponDefinition)
            .HasForeignKey(wdwp => wdwp.WeaponDefinitionId);
        // One-to-many WeaponDefinition -> WeaponProperty (WeaponMastery)
        // Made in WeaponProperty

        #endregion
        #region Item-Entities

        // ItemCategory
        // Many-to-one ItemCategory <- ItemCategoryItemBases
        builder.Entity<ItemCategory>()
            .HasMany(ic => ic.ItemCategoryItemBases)
            .WithOne(icib => icib.ItemCategory)
            .HasForeignKey(icib => icib.ItemCategoryId);

        // WeaponProperty
        // Many-to-one WeaponProperty <- WeaponDefinitionWeaponProperties
        builder.Entity<WeaponProperty>()
            .HasMany(wp => wp.WeaponDefinitionWeaponProperties)
            .WithOne(wdwp => wdwp.WeaponProperty)
            .HasForeignKey(wdwp => wdwp.WeaponPropertyId);
        // Many-to-one WeaponPropery <- WeaponDefinition
        builder.Entity<WeaponProperty>()
            .HasMany(wp => wp.WeaponMasteries)
            .WithOne(wm => wm.WeaponMastery)
            .HasForeignKey(wm => wm.WeaponMasteryId);

        #endregion
        #region Join Table Keys
        builder.Entity<FeatDefinitionCharacterClassDefinition>()
            .HasKey(e => new { e.FeatDefinitionId, e.CharacterClassDefinitionId });

        builder.Entity<FeatDefinitionFeatEffect>()
            .HasKey(e => new { e.FeatDefinitionId, e.FeatEffectId });

        builder.Entity<FeatDefinitionLineageDefinition>()
            .HasKey(e => new { e.FeatDefinitionId, e.LineageDefinitionId });

        builder.Entity<FeatDefinitionSpeciesDefinition>()
            .HasKey(e => new { e.FeatDefinitionId, e.SpeciesDefinitionId });

        builder.Entity<FeatDefinitionSubclassDefinition>()
            .HasKey(e => new { e.FeatDefinitionId, e.SubclassDefinitionId });

        builder.Entity<ItemCategoryItemBase>()
            .HasKey(e => new { e.ItemCategoryId, e.ItemBaseId });

        builder.Entity<SpellCharacterClassDefinition>()
            .HasKey(e => new { e.SpellId, e.CharacterClassBaseId });

        builder.Entity<SpellEffectSpell>()
            .HasKey(e => new { e.SpellEffectId, e.SpellId });

        builder.Entity<SpellItem>()
            .HasKey(e => new { e.SpellId, e.ItemId });

        builder.Entity<SpellSchool>()
            .HasKey(e => new { e.SpellId, e.SchoolId });

        builder.Entity<WeaponDefinitionWeaponProperty>()
            .HasKey(e => new { e.WeaponDefinitionId, e.WeaponPropertyId });

        #endregion
        base.OnModelCreating(builder);
    }
}