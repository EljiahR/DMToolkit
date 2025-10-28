using DMToolkit.API.Models.DMToolkitModels.Instances;

namespace DMToolkit.API.Models.DMToolkitModels.JoinTables;

public class CharacterCharacterClassInstance : IJoinTable
{
    public required string CharacterId { get; set; }
    public Character Character { get; set; } = null!;
    public required string CharacterClassInstanceId { get; set; }
    public CharacterClassInstance CharacterClassInstance { get; set; } = null!;
    public int Level { get; set; } = 0;
    public List<int> HpRolls { get; set; } = new();
}