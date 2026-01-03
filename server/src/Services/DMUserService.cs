using DMToolkit.API.Helpers;

public class DMUserService : IDMUserService
{
    private readonly IDMUserRepository _repository;
    
    public DMUserService(IDMUserRepository repository)
    {
        _repository = repository;
    }

    public async Task<DMUserDto?> GetDMUserDtoAsync(string id)
    {
        var user = await _repository.GetDMUserAsync(id);

        if (user == null)
        {
            return null;
        }

        return DtoConverters.ConvertDMUser(user);
    }
}