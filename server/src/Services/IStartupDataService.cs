using DMToolkit.Shared.Models.Dtos.Collections;

namespace DMToolkit.Services;

public interface IStartupDataService
{
    Task<StartupDataDto> GetStartupDataDtoAsync();
}