using DMToolkit.API.Models;

namespace DMToolkit.API.Repositories;

public interface IDMUserRepository
{
    Task<DMUser?> GetDMUserAsync(string id);
}