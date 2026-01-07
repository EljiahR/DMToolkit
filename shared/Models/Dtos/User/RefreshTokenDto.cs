namespace SharedModels.Models.Dtos.User;
public class RefreshTokenDto
{
    public string UserId { get; set; } = string.Empty;
    public string RefreshToken { get; set; } = string.Empty;
}