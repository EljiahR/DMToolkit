using System.Text;
using DMToolkit.API.Data;
using DMToolkit.API.Data.Seed;
using DMToolkit.API.Models;
using DMToolkit.API.Models.Config;
using DMToolkit.API.Repositories;
using DMToolkit.API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);
var logger = LoggerFactory.Create(logging =>
{
    logging.AddConsole();
}).CreateLogger("Startup");

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

builder.Services.AddIdentity<DMUser, IdentityRole>()
    .AddEntityFrameworkStores<DMDbContext>()
    .AddDefaultTokenProviders();


var jwtSettings = new JwtSettings
{
    Key = builder.Configuration["Key"] ?? "",
    Issuer = builder.Configuration["Issuer"] ?? "",
    Audience = builder.Configuration["Audience"] ?? "",
    ExpiriationInSeconds = int.Parse(builder.Configuration["ExpirationInSeconds"] ?? "7200") 
};


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtSettings.Issuer,
            ValidAudience = jwtSettings.Audience,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Key))
        };

        options.Events = new JwtBearerEvents
        {
            OnMessageReceived = context =>
            {
                var accessToken = context.Request.Query["access_token"];
                if (!string.IsNullOrWhiteSpace(accessToken))
                {
                    context.Token = accessToken;
                }
                
                return Task.CompletedTask;
            },
            OnAuthenticationFailed = context =>
            {
                
                context.Response.StatusCode = 401;
                logger.LogError($"Auth failed: {context.Exception.Message}");
                return Task.CompletedTask;
            },
            OnTokenValidated = context =>
            {
                logger.LogInformation("Token validated!");
                return Task.CompletedTask;
            },
            OnChallenge = context =>
            {
                context.HandleResponse();
                context.Response.StatusCode = 401;
                context.Response.ContentType = "application/json";
                var result = JsonConvert.SerializeObject(new { error = "Authentication failed." });
                return context.Response.WriteAsync(result);
            },
            OnForbidden = context =>
            {
                
                context.Response.StatusCode = 403;
                context.Response.ContentType = "application/json";
                var result = JsonConvert.SerializeObject(new { error = "You do not have access to this resource." });
                return context.Response.WriteAsync(result);
            }
        };

    });

builder.Services.AddAuthorization();

// Added services to container
builder.Services.AddScoped<IDMUserRepository, DMUserRepository>();
builder.Services.AddScoped<IDMUserService, DMUserService>();

builder.Services.AddScoped<IStartupDataService, StartupDataService>();

builder.Services.AddScoped<IRefreshTokenRepository, RefreshTokenRepository>();
builder.Services.AddScoped<IRefreshTokenService, RefreshTokenService>();

builder.Services.AddSingleton(jwtSettings);

builder.Services.AddControllers();

// Following code found on: https://www.codegenes.net/blog/asp-net-core-how-to-get-remote-ip-address/#4-solutions-to-get-remote-ip-address-correctly
// Visit link for trouble shooting related to ip address issues
builder.Services.Configure<ForwardedHeadersOptions>(options =>
{
    options.ForwardedHeaders = 
        ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
    
    // Uncomment the following line if using Azure, AWS, or another cloud provider
    // options.KnownNetworks.Clear(); // Allow all private IPs (adjust for your network)
    // options.KnownProxies.Clear();  // Allow specific proxy IPs

    // TODO
    // Production must explicitly trust proxy's ip address, which I do not have atm
    // options.KnownProxies.Add(IPAddress.Parse("192.168.1.100")); // Proxy 1
    // options.KnownProxies.Add(IPAddress.Parse("10.0.0.5"));       // Proxy 2
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    // Include 'SecurityScheme' to use JWT Authentication
    var jwtSecurityScheme = new OpenApiSecurityScheme
    {
        BearerFormat = "JWT",
        Name = "JWT Authentication",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = JwtBearerDefaults.AuthenticationScheme,
        Description = "Put **_ONLY_** your JWT Bearer token on textbox below!",

        Reference = new OpenApiReference
        {
            Id = JwtBearerDefaults.AuthenticationScheme,
            Type = ReferenceType.SecurityScheme
        }
    };

    c.AddSecurityDefinition(jwtSecurityScheme.Reference.Id, jwtSecurityScheme);

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        { jwtSecurityScheme, Array.Empty<string>() }
    });
});

var app = builder.Build();

// Use Forwarded Headers MIDDLEWARE (MUST come BEFORE other middleware like UseHttpsRedirection)
app.UseForwardedHeaders();

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


app.MapControllers();

app.Run();
