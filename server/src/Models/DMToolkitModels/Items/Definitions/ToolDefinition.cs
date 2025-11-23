using DMToolkit.API.Models.DMToolkitModels.Items.Bases;
using SharedModels.Enums;

namespace DMToolkit.API.Models.DMToolkitModels.Items.Definitions;

public class ToolDefinition : ItemDefinitionBase, IItemDefinition
{
    public ToolCategory ToolCategory { get; set; } = ToolCategory.Other;

    public ToolDefinition()
    {
        ItemType = "Tool";
    }
}