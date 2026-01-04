using SharedModels.Models.Dtos.Instances;

namespace SharedModels.Models.Dtos.User;

public class DMUserDto
{
    public List<CharacterDto> Characters { get; set; } = new();
}