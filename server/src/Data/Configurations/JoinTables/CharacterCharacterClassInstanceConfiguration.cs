using DMToolkit.API.Models.DMToolkitModels.JoinTables;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMToolkit.API.Data.Configurations.JoinTables;

public class CharacterCharacterClassInstanceConfiguration : JoinTableKeyConfiguration<CharacterCharacterClassInstance>
{
    protected override void ExtraConfigure(EntityTypeBuilder<CharacterCharacterClassInstance> builder)
    {
        
    }
}