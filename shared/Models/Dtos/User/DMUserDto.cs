using SharedModels.Models.Dtos.Instances;

namespace SharedModels.Models.Dtos.User;

public class DMUserDto
{
    public string UserName { get; set; } = string.Empty;
    public List<CharacterDto> Characters { get; set; } = new();
}