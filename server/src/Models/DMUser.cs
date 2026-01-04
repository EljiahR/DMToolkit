using DMToolkit.API.Models.DMToolkitModels.Instances;
using Microsoft.AspNetCore.Identity;

namespace DMToolkit.API.Models;

public class DMUser : IdentityUser
{
    public override required string? UserName { get; set; }
    public override string? Email { get;set; }
    public List<Character> Characters { get; set; } = new();
}