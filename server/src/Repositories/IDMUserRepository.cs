using DMToolkit.API.Models;

public interface IDMUserRepository
{
    Task<DMUser?> GetDMUserAsync(string id);
}