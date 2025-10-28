using SharedModels.Enums;
using SharedModels.Models.Dtos.Items.Bases;

namespace SharedModels.Models.Dtos.Items.Definitions;

public class ArmorDefinitionDto : ItemDefinitionBaseDto
{
    public ArmorCategory ArmorCategory { get; set; } = ArmorCategory.Light;
    public int BaseAC { get; set; } = 0;
    public int DexterityCap { get; set; } = 0;
    public bool HasDexterityCap { get; set; } = false;
    public int StrengthRequirement { get; set; } = 0;
    public bool HasStealthDisadvantage { get; set; } = false;
    public string Don { get; set; } = string.Empty;
    public string Doff { get; set; } = string.Empty;
}