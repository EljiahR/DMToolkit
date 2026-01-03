using DMToolkit.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

[Authorize]
[Route("[controller]")]
[ApiController]
public class DMUserController
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

    [HttpPost]
    [AllowAnonymous]
    
}