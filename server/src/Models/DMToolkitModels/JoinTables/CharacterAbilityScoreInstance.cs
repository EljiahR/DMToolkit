using DMToolkit.Models.Instances;

namespace DMToolkit.Models.JoinTables;

public class CharacterAbilityScoreInstance : IJoinTable
{
    public required string CharacterId { get; set; }
    public required Character Character { get; set; }
    public required string AbilityScoreInstanceId { get; set; }
    public required AbilityScoreInstance AbilityScoreInstance { get; set; }
}