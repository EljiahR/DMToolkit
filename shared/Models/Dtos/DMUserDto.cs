using SharedModels.Models.Dtos.Instances;

namespace SharedModels.Models.Dtos;

public class DMUserDto
{
    public List<CharacterDto> Characters { get; set; } = new();
}