using DMToolkit.Models.Common;

namespace DMToolkit.Models.Bases;

public abstract class ItemBase : Worth
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public int Weight { get; set; } = 0;
    public string Category { get; set; } = string.Empty;
}
