namespace DMToolkit.Models.Items.ToolModels;

public class ToolCategory : ITools
{
    public string Name {get; set;}
    public Tool[] Tools {get; set;}

    public ToolCategory(string name, Tool[] tools)
    {
        Name = name;
        Tools = tools;
    }
}