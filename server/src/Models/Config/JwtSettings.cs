namespace DMToolkit.API.Models.Config;

public class JwtSettings
{
    public required string Key { get; set; }
    public required string Issuer { get; set; }
    public required string Audience { get; set; }
    public required int ExpiriationInSeconds { get; set; }
}