using DMToolkit.Models.JoinTables;

namespace DMToolkit.Models.Entities;

public class School
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public ICollection<SpellSchool> SpellSchools { get; set; } = new List<SpellSchool>();
}