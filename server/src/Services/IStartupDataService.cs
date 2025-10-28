using SharedModels.Models.Dtos.Collections;

namespace DMToolkit.API.Services;

public interface IStartupDataService
{
    Task<StartupDataDto> GetStartupDataDtoAsync();
}