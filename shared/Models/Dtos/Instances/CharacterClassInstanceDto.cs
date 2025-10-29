namespace SharedModels.Models.Dtos.Instances;

public class CharacterClassInstanceDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public int Level { get; set; } = 0;
    public List<int> HpRolls { get; set; } = new();
    public ICollection<FeatInstanceDto> FeatInstances { get; set; } = new List<FeatInstanceDto>();
    public SubclassInstanceDto? SubclassInstance { get; set; } = null;
    public bool SelectedItemSet { get; set; } = false;
    public string DefinitionId { get; set; } = string.Empty;
}