using DMToolkit.Models.Definitions;

namespace DMToolkit.Models.JoinTables;

public interface IClassFeat
{
    public string FeatDefinitionId { get; set; }
    public FeatDefinition FeatDefinition { get; set; }
    public int Level { get; set; }
    public int Group { get; set; }
}