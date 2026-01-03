using DMToolkit.API.Models.DMToolkitModels.Instances;
using Microsoft.AspNetCore.Identity;

namespace DMToolkit.API.Models;

public class DMUser : IdentityUser
{
    public List<Character> Characters { get; set; } = new();
}