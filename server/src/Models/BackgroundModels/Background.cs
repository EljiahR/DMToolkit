using DMTools.Models.Features;
using DMTools.Models.Items;
using DMTools.Models.Items.ToolModels;

namespace DMTools.Models.BackgroundModels;

public class Background
{
    public string BackgroundName {get;}
    public string[] AbilityScores {get;}
    public Feature BackgroundFeat {get;}
    public string[] SkillProficiencies {get;}
    public ITools ToolProficiency {get;}
    public Item[][] EquipmentSets {get;}
    public string BackgroundDescription {get;}
    public Background(
        string backgroundName, 
        string[] abilityScores, 
        Feature backgroundFeat, 
        string[] skillProficiencies, 
        ITools toolProficiencies, 
        Item[][] equipmentSets, 
        string backgroundDescription)
    {
        BackgroundName = backgroundName;
        AbilityScores = abilityScores;
        BackgroundFeat = backgroundFeat;
        SkillProficiencies = skillProficiencies;
        ToolProficiency = toolProficiencies;
        EquipmentSets = equipmentSets;
        BackgroundDescription = backgroundDescription;
    }
}