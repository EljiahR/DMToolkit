using DMToolkit.Shared.Models.Dtos.Joins;

namespace DMToolkit.Shared.Models.Dtos.Entities;

public class SpellDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Name { get; set; } = string.Empty;
    public int Level { get; set; } = 0;
    public string SchoolId { get; set; } = string.Empty;
    public ICollection<string> CharacterClassIds { get; set; } = new List<string>();
    public string CastingTime { get; set; } = string.Empty;
    public string Range { get; set; } = string.Empty;
    public bool VerbalRequired { get; set; } = false;
    public bool SomaticRequired { get; set; } = false;
    public bool MaterialsRequired { get; set; } = false;
    public ICollection<SpellItemDto> MaterialRequirements { get; set; } = new List<SpellItemDto>();
    public string Duration { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public ICollection<string> EffectIds { get; set; } = new List<string>();
}