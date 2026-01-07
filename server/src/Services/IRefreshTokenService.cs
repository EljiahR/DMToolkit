using DMToolkit.API.Models;

namespace DMToolkit.API.Services;

public interface IRefreshTokenService
{
    Task<RefreshToken?> GetRefreshTokenAsync(string refreshToken);
    Task<List<RefreshToken>> GetAllRefreshTokensAsync();
    Task<RefreshToken> AddRefreshTokenAsync(RefreshToken refreshToken);
    Task DeleteAllUserRefreshTokensAsync(string userId);
    Task RevokeTokenAsync(string refreshToken);
}