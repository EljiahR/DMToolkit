using DMToolkit.API.Models.DMToolkitModels.Definitions;

namespace DMToolkit.API.Models.DMToolkitModels.JoinTables;

public interface IClassFeat
{
    public string FeatDefinitionId { get; set; }
    public FeatDefinition FeatDefinition { get; set; }
    public int Level { get; set; }
    public int Group { get; set; }
}