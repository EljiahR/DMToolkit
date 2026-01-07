using DMToolkit.API.Models;

namespace DMToolkit.API.Repositories;

public interface IRefreshTokenRepository
{
    Task<RefreshToken?> GetRefreshTokenAsync(string refreshToken);
    Task<List<RefreshToken>> GetAllRefreshTokensAsync();
    Task<RefreshToken> AddRefreshTokenAsync(RefreshToken refreshToken);
    Task DeleteAllUserRefreshTokensAsync(string userId);
    Task RevokeTokenAsync(string refreshToken);
}