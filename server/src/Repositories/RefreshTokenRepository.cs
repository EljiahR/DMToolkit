using DMToolkit.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DMToolkit.API.Repositories;

public class RefreshTokenRepository : IRefreshTokenRepository
{
    private readonly DbContext _context;
    private readonly DbSet<RefreshToken> _refreshTokenSet;

    public RefreshTokenRepository(DbContext context)
    {
        _context = context;
        _refreshTokenSet = context.Set<RefreshToken>();
    }
    public async Task<RefreshToken> AddRefreshTokenAsync(RefreshToken refreshToken)
    {
        var existingTokens = _refreshTokenSet.Where(t => t.UserId == refreshToken.UserId);
        if (existingTokens.Count() > 0)
        {
            _refreshTokenSet.RemoveRange(existingTokens);
        }

        await _refreshTokenSet.AddAsync(refreshToken);
        await _context.SaveChangesAsync();

        return refreshToken;
    }

    public async Task DeleteAllUserRefreshTokensAsync(string userId)
    {
        var existingTokens = _refreshTokenSet.Where(t => t.UserId == userId);
        if (existingTokens.Count() > 0)
        {
            _refreshTokenSet.RemoveRange(existingTokens);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<List<RefreshToken>> GetAllRefreshTokensAsync()
    {
        return await _refreshTokenSet.ToListAsync();
    }

    public async Task<RefreshToken?> GetRefreshTokenAsync(string refreshToken)
    {
        return await _refreshTokenSet.FirstOrDefaultAsync(t => t.Token == refreshToken);
    }

    public async Task RevokeTokenAsync(string refreshToken)
    {
        var existingToken = await _refreshTokenSet.FirstOrDefaultAsync(t => t.Token == refreshToken);
        if (existingToken != null)
        {
            existingToken.IsRevoked = true;
            await _context.SaveChangesAsync();
        }
    }
}