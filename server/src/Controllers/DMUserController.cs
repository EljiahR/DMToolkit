using DMToolkit.API.Models;
using DMToolkit.API.Models.Dtos;
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
    private readonly SignInManager<DMUser> _signInManager;
    private readonly UserManager<DMUser> _userManager;
    private readonly IDMUserService _dmUserService;

    public DMUserController(SignInManager<DMUser> signInManager, UserManager<DMUser> userManager, IDMUserService dMUserService)
    {
        _signInManager = signInManager;
        _userManager = userManager;
        _dmUserService = dMUserService;
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
        // Token shit here

        return Ok(new LoginReturnDto { User = userDto, AccessToken = "", RefreshToken = "" });
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

        return Ok(new LoginReturnDto { User = userDto, AccessToken = "", RefreshToken = "" });
    }
}