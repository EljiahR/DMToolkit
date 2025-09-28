using DMToolkit.Models.Instances;

namespace DMToolkit.Models.JoinTables;

public class FeatInstanceCharacterClassInstance : IJoinTable
{
    public required string FeatInstanceId { get; set; }
    public required FeatInstance FeatInstance { get; set; }
    public required string CharacterClassInstanceId { get; set; }
    public required CharacterClassInstance CharacterClassInstance { get; set; }
}