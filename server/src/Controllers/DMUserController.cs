using System.Security.Claims;
using DMToolkit.API.Helpers;
using DMToolkit.API.Models;
using DMToolkit.API.Models.Config;
using DMToolkit.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SharedModels.Models.Dtos.User;

namespace DMToolkit.API.Controllers;

[Authorize]
[Route("[controller]")]
[ApiController]
public class DMUserController : ControllerBase
{
    private readonly UserManager<DMUser> _userManager;
    private readonly IDMUserService _dmUserService;
    private readonly IRefreshTokenService _refreshTokenService;
    private readonly JwtSettings _jwtSettings;

    public DMUserController(UserManager<DMUser> userManager, IDMUserService dMUserService, IRefreshTokenService refreshTokenService, JwtSettings jwtSettings)
    {
        _userManager = userManager;
        _dmUserService = dMUserService;
        _refreshTokenService = refreshTokenService;
        _jwtSettings = jwtSettings;
    }

    [HttpPost("SignIn")]
    [AllowAnonymous]
    public async Task<IActionResult> SignIn([FromBody] SignInDto model)
    {
        var user = await _userManager.FindByNameAsync(model.Username);
        if (user == null)
        {
            return Unauthorized(new { message = "Username and/or password incorrect." });
        }

        var passwordMatches = await _userManager.CheckPasswordAsync(user, model.Password);
        if (!passwordMatches)
        {
            return Unauthorized(new { message = "Username and/or password incorrect."});
        }

        var userDto = await _dmUserService.GetDMUserDtoAsync(user.Id);
        if (userDto == null)
        {
            return NotFound("User was not found in database.");
        }
        
        var signInReturn = await GetNewTokensAsync(userDto);

        return Ok(signInReturn);
    }

    [HttpPost("Register")]
    [AllowAnonymous]
    public async Task<IActionResult> Register([FromBody] SignInDto model)
    {
        var existingUser = await _userManager.FindByNameAsync(model.Username);

        if (existingUser != null)
        {
            return Conflict("Username already taken.");
        }

        var user = new DMUser
        {
            UserName = model.Username
        };

        var result = await _userManager.CreateAsync(user, model.Password);

        if (!result.Succeeded)
        {
            return BadRequest(result.Errors);
        }

        var userDto = await _dmUserService.GetDMUserDtoAsync(user.Id);
        if (userDto == null)
        {
            return NotFound("User was not found in database.");
        }

        var signInReturn = await GetNewTokensAsync(userDto);

        return Ok(signInReturn);
    }

    [HttpPost("Refresh")]
    [AllowAnonymous]
    public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenDto model)
    {
        var existingToken = await _refreshTokenService.GetRefreshTokenAsync(model.RefreshToken);

        if (existingToken is not { IsRevoked: false })
        {
            return Unauthorized("Refresh token is invalid.");
        }

        var userDto = await _dmUserService.GetDMUserDtoAsync(existingToken.UserId);

        if (userDto == null)
        {
            return NotFound("User was not found in database."); 
        }

        var signInReturn = await GetNewTokensAsync(userDto);

        return Ok(signInReturn);        
    }

    [HttpPost("SignOut")]
    public async Task<IActionResult> SignOutUser()
    {
        var currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (string.IsNullOrEmpty(currentUserId))
        {
            return BadRequest("Issue with current user's claims");
        }

        await _refreshTokenService.DeleteAllUserRefreshTokensAsync(currentUserId);

        return Ok("User successfully signed out");
    }

    private async Task<SignInReturnDto> GetNewTokensAsync(DMUserDto userDto)
    {
        var accessToken = TokenGenerator.GenerateAccessToken(userDto.UserName, userDto.Id, _jwtSettings);
        var requesterIp = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "null"; 
        var refreshToken = new RefreshToken
        {
            Token = TokenGenerator.GenerateRefreshToken(),
            UserId = userDto.Id,
            ExpiresAt = DateTime.Now.AddDays(7),
            CreatedByIp = requesterIp
        };
        await _refreshTokenService.AddRefreshTokenAsync(refreshToken);

        return new SignInReturnDto
        {
            User = userDto,
            AccessToken = accessToken,
            RefreshToken = refreshToken.Token
        };
    }
}