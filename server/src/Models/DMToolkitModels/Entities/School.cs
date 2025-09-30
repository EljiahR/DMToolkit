namespace DMToolkit.Models.Entities;

public class School
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public ICollection<Spell> Spell { get; set; } = new List<Spell>();
}