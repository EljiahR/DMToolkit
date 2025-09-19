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
        #region Definitions

        // AbilityScoreDefinition
        // Many-to-one AbilityScoreDefinition <- SkillDefinitions
        builder.Entity<AbilityScoreDefinition>()
            .HasMany(asd => asd.SkillDefinitions)
            .WithOne(sd => sd.AbilityScoreDefinition)
            .HasForeignKey(sd => sd.AbilityScoreDefinitionId);

        // BackgroundDefinition
        // One-to-many BackgroundDefinition -> FeatDefinition
        //// Made in FeatDefinition

        // CharacterClassDefinition
        // Many-to-one CharacterClassDefinition <- SubclassDefinitions
        builder.Entity<CharacterClassDefinition>()
            .HasMany(ccd => ccd.SubclassDefinitions)
            .WithOne(sd => sd.CharacterClassDefinition)
            .HasForeignKey(sd => sd.CharacterClassDefinitionId);
        // Many-to-one CharacterClassDefinition <- FeatDefinitionCharacterClassDefinition
        builder.Entity<CharacterClassDefinition>()
            .HasMany(ccd => ccd.FeatDefinitionCharacterClassDefinitions)
            .WithOne(fdccd => fdccd.CharacterClassDefinition)
            .HasForeignKey(fdccd => fdccd.CharacterClassDefinitionId);

        // FeatDefinition
        // Many-to-one FeatDefinition <- FeatDefinitionFeatEffects
        builder.Entity<FeatDefinition>()
            .HasMany(fd => fd.FeatDefinitionFeatEffects)
            .WithOne(fdfe => fdfe.FeatDefinition)
            .HasForeignKey(fdfe => fdfe.FeatDefinitionId);
        // Many-to-one FeatDefinition <- FeatDefinitionCharacterClassDefinitions
        builder.Entity<FeatDefinition>()
            .HasMany(fd => fd.FeatDefinitionCharacterClassDefinitions)
            .WithOne(fdccd => fdccd.FeatDefinition)
            .HasForeignKey(fdccd => fdccd.FeatDefinitionId);
        // Many-to-one FeatDefinition <- FeatDefinitionLineageDefinitions
        builder.Entity<FeatDefinition>()
            .HasMany(fd => fd.FeatDefinitionLineageDefinitions)
            .WithOne(fdld => fdld.FeatDefinition)
            .HasForeignKey(fdld => fdld.FeatDefinitionId);
        // Many-to-one FeatDefinition <- FeatDefinitionSpeciesDefinitions
        builder.Entity<FeatDefinition>()
            .HasMany(fd => fd.FeatDefinitionSpeciesDefinitions)
            .WithOne(fdsd => fdsd.FeatDefinition)
            .HasForeignKey(fdsd => fdsd.FeatDefinitionId);
        // Many-to-one FeatDefinition <- FeatDefinitionSubclassDefinitions
        builder.Entity<FeatDefinition>()
            .HasMany(fd => fd.FeatDefinitionSubclassDefinitions)
            .WithOne(fdsd => fdsd.FeatDefinition)
            .HasForeignKey(fdsd => fdsd.FeatDefinitionId);
        // Many-to-one FeatDefinition <- BackgroundDefinitions
        builder.Entity<FeatDefinition>()
            .HasMany(fd => fd.BackgroundDefinitions)
            .WithOne(bd => bd.FeatDefinition)
            .HasForeignKey(bd => bd.FeatDefinitionId);

        // LineageDefinition
        // Many-to-one LineageDefinition <- FeatDefinitionLineageDefinitions
        builder.Entity<LineageDefinition>()
            .HasMany(ld => ld.FeatDefinitionLineageDefinitions)
            .WithOne(fdld => fdld.LineageDefinition)
            .HasForeignKey(fdld => fdld.LineageDefinitionId);
        // One-to-many LineageDefinition -> SpeciesDefinition
        //// Made in SpeciesDefinition

        // SkillDefinition
        // One-to-many SkillDefinition -> AbililtyScoreDefinition
        //// Made in AbililtyScoreDefinition

        // SpeciesDefinition
        // Many-to-one SpeciesDefinition <- FeatDefinitionSpeciesDefinitions
        builder.Entity<SpeciesDefinition>()
            .HasMany(sd => sd.FeatDefinitionSpeciesDefinitions)
            .WithOne(fdsd => fdsd.SpeciesDefinition)
            .HasForeignKey(fdsd => fdsd.SpeciesDefinitionId);
        // Many-to-one SpeciesDefinition <- LineageDefinition
        builder.Entity<SpeciesDefinition>()
            .HasMany(sd => sd.LineageDefinitions)
            .WithOne(ld => ld.SpeciesDefinition)
            .HasForeignKey(ld => ld.SpeciesDefinitionId);

        // SubclassDefinition
        // Many-to-one SubclassDefinition <- FeatDefinitionSubclassDefinitions
        builder.Entity<SubclassDefinition>()
            .HasMany(sd => sd.FeatDefinitionSubclassDefinitions)
            .WithOne(fdsc => fdsc.SubclassDefinition)
            .HasForeignKey(fdsc => fdsc.SubclassDefinitionId);

        #endregion
        #region Entites

        // FeatEffect
        // Many-to-one FeatEffect <- FeatDefinitionFeatEffects
        builder.Entity<FeatEffect>()
            .HasMany(fe => fe.FeatDefinitionFeatEffects)
            .WithOne(fdfe => fdfe.FeatEffect)
            .HasForeignKey(fdfe => fdfe.FeatEffectId);

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