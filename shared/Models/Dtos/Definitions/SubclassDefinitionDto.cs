using SharedModels.Models.Dtos.Joins;

namespace SharedModels.Models.Dtos.Definitions;

public class SubclassDefinitionDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<FeatGroupLevelDto> FeatTables { get; set; } = new List<FeatGroupLevelDto>();
}