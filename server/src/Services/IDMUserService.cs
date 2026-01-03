using SharedModels.Models.Dtos;

namespace DMToolkit.API.Services;

public interface IDMUserService
{
    Task<DMUserDto?> GetDMUserDtoAsync(string id);
}