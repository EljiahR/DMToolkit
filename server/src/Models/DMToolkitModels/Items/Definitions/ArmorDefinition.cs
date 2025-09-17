using DMToolkit.Models.Items.Bases;
using DMToolkit.Shared.Models.Enums;

namespace DMToolkit.Models.Items.Definitions;

public class ArmorDefinition : ItemBase
{
    public ArmorCategory ArmorCategory { get; set; } = ArmorCategory.Light;
}