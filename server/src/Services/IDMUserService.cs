public interface IDMUserService
{
    Task<DMUserDto?> GetDMUserDtoAsync(string id);
}