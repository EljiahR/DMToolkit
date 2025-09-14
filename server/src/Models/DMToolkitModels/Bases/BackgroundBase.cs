namespace DMToolkit.Models.Bases;

public class BackgroundBase
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string AbilityScoreOptionOne { get; set; } = string.Empty;
    public string AbilityScoreOptionTwo { get; set; } = string.Empty;
    public string AbilityScoreOptionThree { get; set; } = string.Empty;
    public string FeatBaseId { get; set; } = string.Empty;
    public FeatBase? Feat { get; set; } = null;
    public string SkillOne { get; set; } = string.Empty;
    public string SkillTwo { get; set; } = string.Empty; 
}