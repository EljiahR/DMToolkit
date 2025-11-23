using SharedModels.Enums;
using SharedModels.Models.Dtos.Items.Bases;

namespace SharedModels.Models.Dtos.Items.Definitions;

public class ToolDefinitionDto : ItemDefinitionBaseDto
{
    public ToolCategory ToolCategory { get; set; } = ToolCategory.Other;
}