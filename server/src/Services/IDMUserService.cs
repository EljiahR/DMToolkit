using SharedModels.Models.Dtos.User;

namespace DMToolkit.API.Services;

public interface IDMUserService
{
    Task<DMUserDto?> GetDMUserDtoAsync(string id);
}