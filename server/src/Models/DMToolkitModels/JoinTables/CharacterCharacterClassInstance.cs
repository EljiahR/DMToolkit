using DMToolkit.Models.Instances;

namespace DMToolkit.Models.JoinTables;

public class CharacterCharacterClassInstance : IJoinTable
{
    public required string CharacterId { get; set; }
    public Character Character { get; set; } = null!;
    public required string CharacterClassInstanceId { get; set; }
    public CharacterClassInstance CharacterClassInstance { get; set; } = null!;
    public int Level { get; set; } = 0;
    public int HpRoll { get; set; } = 0;
}