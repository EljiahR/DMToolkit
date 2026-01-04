namespace SharedModels.Models.Dtos.User;

public class LoginReturnDto
{
    public required DMUserDto User { get; set; }
    public required string AccessToken { get; set; }
    public required string RefreshToken { get; set; }
}