using DMToolkit.API.Models;
using DMToolkit.API.Repositories;

namespace DMToolkit.API.Services;

public class RefreshTokenService : IRefreshTokenService
{
    private readonly IRefreshTokenRepository _repository;

    public RefreshTokenService(IRefreshTokenRepository repository)
    {
        _repository = repository;
    }

    public async Task<RefreshToken> AddRefreshTokenAsync(RefreshToken refreshToken)
    {
        return await _repository.AddRefreshTokenAsync(refreshToken);
    }

    public async Task DeleteAllUserRefreshTokensAsync(string userId)
    {
        await _repository.DeleteAllUserRefreshTokensAsync(userId);
    }

    public async Task<List<RefreshToken>> GetAllRefreshTokensAsync()
    {
        return await _repository.GetAllRefreshTokensAsync();
    }

    public async Task<RefreshToken?> GetRefreshTokenAsync(string refreshToken)
    {
        return await _repository.GetRefreshTokenAsync(refreshToken);
    }

    public async Task RevokeTokenAsync(string refreshToken)
    {
        await _repository.RevokeTokenAsync(refreshToken);
    }
}