using DMToolkit.API.Models;
using Microsoft.EntityFrameworkCore;

public class DMUserRepository : IDMUserRepository
{
    private readonly DbContext _context;
    private readonly DbSet<DMUser> _userSet;
    public DMUserRepository(DbContext context)
    {
        _context = context;
        _userSet = context.Set<DMUser>();
    }

    public async Task<DMUser?> GetDMUserAsync(string id)
    {
        var user = await _userSet
            .Include(u => u.Characters)
            .FirstOrDefaultAsync(u => u.Id == id);

        return user;
    }
}