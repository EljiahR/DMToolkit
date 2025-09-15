using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Definitions;

public class School
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public List<SpellSchool> SpellSchools { get; set; } = new();
}