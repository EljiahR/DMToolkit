using DMToolkit.Models.Instances;

namespace DMToolkit.Models.JoinTables;

public class CharacterCharacterClassInstance : IJoinTable
{
    public required string CharacterId { get; set; }
    public required Character Character { get; set; }
    public required string CharacterClassInstanceId { get; set; }
    public required CharacterClassInstance CharacterClassInstance { get; set; }
    public int Level { get; set; } = 0;
    public int HpRoll { get; set; } = 0;
}