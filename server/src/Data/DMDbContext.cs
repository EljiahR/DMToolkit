using DMToolkit.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

public class DMDbContext : IdentityDbContext<DMUser>
{
    public DMDbContext(DbContextOptions<DMDbContext> options) : base(options)
    {
        Database.EnsureCreated();
    }
    

}