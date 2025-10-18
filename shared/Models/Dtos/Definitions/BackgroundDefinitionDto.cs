using DMToolkit.Shared.Models.Dtos.Joins;

namespace DMToolkit.Shared.Models.Dtos.Definitions;

public class BackgroundDefinitionDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<string> AbilityScoreDefinitionIds { get; set; } = new List<string>();
    public string FeatDefinitionId { get; set; } = string.Empty;
    public ICollection<string> SkillDefinitionIds { get; set; } = new List<string>();
    public int StartingGp { get; set; } = 0;
    public ICollection<ItemDefinitionBaseQuantity> ItemDefinitionBaseQuantities { get; set; } = new List<ItemDefinitionBaseQuantity>();
}