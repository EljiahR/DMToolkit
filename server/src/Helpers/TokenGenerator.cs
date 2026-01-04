using System.Security.Claims;
using DMToolkit.API.Models.Config;

namespace DMToolkit.API.Helpers;

public static class TokenGenerator
{
    public static string GenerateAccessToken(string userName, string userId, JwtSettings jwtSettings)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, userName),
            
        };
    }
}