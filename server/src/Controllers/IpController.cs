using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api")]
public class IpController : ControllerBase
{
    [HttpGet("ip")]
    public IActionResult GetRemoteIp()
    {
        var ip = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "null";
        return Ok(new { RemoteIp = ip });
    }

    // Same as previous but testing Authorization
    [Authorize]
    [HttpGet("ipAuth")]
    public IActionResult GetRemoteIpAuth()
    {
        var ip = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "null";
        return Ok(new { RemoteIp = ip });
    }
}