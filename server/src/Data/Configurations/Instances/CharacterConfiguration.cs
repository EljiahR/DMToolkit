using DMToolkit.Models.Instances;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.Data.Configurations;

public class CharacterConfiguration : IEntityTypeConfiguration<Character>
{
    public void Configure(EntityTypeBuilder<Character> builder)
    {
        // Many-to-one Character <- CharacterCharacterClassInstances 
        builder.HasMany(c => c.CharacterCharacterClassInstances)
            .WithOne(j => j.Character)
            .HasForeignKey(j => j.CharacterId);

        // One-to-one Character < - > BackgroundInstance
        builder.HasOne(c => c.BackgroundInstance)
            .WithOne()
            .HasForeignKey<Character>(c => c.BackgroundInstanceId);

        // One-to-one Character < - > SpeciesInstance
        builder.HasOne(c => c.SpeciesInstance)
            .WithOne()
            .HasForeignKey<Character>(c => c.SpeciesInstanceId);

        // Many-to-one Character <- CharacterItemBases
        builder.HasMany(c => c.CharacterItemBases)
            .WithOne(j => j.Character)
            .HasForeignKey(j => j.CharacterId);

        // Many-to-one Character <- CharacterSpells
        builder.HasMany(c => c.CharacterSpells)
            .WithOne(j => j.Character)
            .HasForeignKey(j => j.CharacterId);
    }
}