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
}