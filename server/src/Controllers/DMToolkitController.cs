using DMToolkit.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DMToolkit.Controllers;

[Route("[controller]")]
[ApiController]
public class DMToolkitController : ControllerBase
{
    private readonly IStartupDataService _startupDataService;

    public DMToolkitController(IStartupDataService startupDataService)
    {
        _startupDataService = startupDataService;
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetStartupDataDtoAsync()
    {
        return Ok(await _startupDataService.GetStartupDataDtoAsync());
    }
}