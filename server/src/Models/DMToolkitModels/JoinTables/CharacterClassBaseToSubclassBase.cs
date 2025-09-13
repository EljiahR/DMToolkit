namespace DMToolkit.Models.JoinTables;

public class CharacterClassBaseToSubclassBase
{
    public string ClassId { get; set; } = Guid.NewGuid().ToString();
    public string SubclassId { get; set; } = Guid.NewGuid().ToString();
} 