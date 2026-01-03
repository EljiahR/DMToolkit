using DMToolkit.API;
using DMToolkit.API.Data;
using DMToolkit.API.Data.Seed;
using DMToolkit.API.Models;
using DMToolkit.API.Repositories;
using DMToolkit.API.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

string? dbConnection = builder.Configuration["DatabaseConnectionString"];

var allowedOrigins = new List<string?>
{
    builder.Configuration["AllowedOrigin"] ?? "https://shiny-space-guacamole-g4q6xp94p9472ww7g-5173.app.github.dev",
    builder.Configuration["DevelopmentOrigin"]
};

if (!string.IsNullOrWhiteSpace(dbConnection))
{
    builder.Services.AddDbContext<DMDbContext>(options =>
        options.UseNpgsql(dbConnection));
}
else
{
    builder.Services.AddDbContext<DMDbContext>(options =>
        options.UseSqlite("Data Source=dm.db"));

    builder.Services.AddScoped<TestDataSeeder>();
}

builder.Services.AddMemoryCache();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowClient",
        policy =>
        {
            policy.WithOrigins(allowedOrigins.Where(o => !string.IsNullOrWhiteSpace(o)).ToArray()!)
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
        });
    options.AddPolicy("AllowAnyOrigins",
        policy =>
        {
            policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

builder.Services.AddIdentityApiEndpoints<DMUser>().AddEntityFrameworkStores<DMDbContext>();

builder.Services.AddAuthorization();

// Added services to container
builder.Services.AddScoped<IDMUserRepository, DMUserRepository>();
builder.Services.AddScoped<IDMUserService, DMUserService>();
builder.Services.AddScoped<IStartupDataService, StartupDataService>();

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.Logger.LogInformation("Allowed Origins: {allowedOrigins}", allowedOrigins);

if (string.IsNullOrWhiteSpace(dbConnection))
{
    using (var scope = app.Services.CreateScope())
    {
        app.Logger.LogInformation("Attempting to seed database...");
        var seeder = scope.ServiceProvider.GetRequiredService<TestDataSeeder>();
        seeder.Seed();
    }
}

app.MapIdentityApi<DMUser>();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowClient");
app.UseAuthentication();
app.UseAuthorization();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast")
.WithOpenApi();

app.MapGet("/weatherforecastsecure", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecastWithAuth")
.WithOpenApi()
.RequireAuthorization();

app.MapControllers();

app.Run();

namespace DMToolkit.API
{
    record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
    {
        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
    }
}
