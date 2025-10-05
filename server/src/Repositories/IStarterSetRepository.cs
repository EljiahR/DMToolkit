using DMToolkit.Models.Collections;

namespace DMToolkit.Repositories;

public interface IStarterSetRepository
{
    Task<StarterSet> GetStarterSetAsync();
}