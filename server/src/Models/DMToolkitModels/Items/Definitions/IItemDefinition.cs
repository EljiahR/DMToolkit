namespace DMToolkit.API.Models.DMToolkitModels.Items.Definitions;

public interface IItemDefinition
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Weight { get; set; }
    public string ItemType { get; set; }
    public int Cp { get; set; }
    public int Sp { get; set; }
    public int Ep { get; set; }
    public int Gp { get; set; }
    public int Pp { get; set; }
}