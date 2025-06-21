using DMTools.Models.Items;

namespace DMTools.Models.BackgroundModels;

public class BackgroundInstance
{
    public Background PlayerBackground {get; set;}
    public string[] AbilityScoreImprovements {get; set;}
    public string ToolProficiency {get; set;}
    public Item[] EquipmentSet {get; set;}
    public BackgroundInstance(Background playerBackground, string[] abilityScoreImprovements, string toolProficiency, Item[] equipmentSet)
    {
        PlayerBackground = playerBackground;
        AbilityScoreImprovements = abilityScoreImprovements;
        ToolProficiency = toolProficiency;
        EquipmentSet = equipmentSet;
    }
}