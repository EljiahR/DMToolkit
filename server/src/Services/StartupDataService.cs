using DMToolkit.Data;
using DMToolkit.Helpers;
using DMToolkit.Models.Collections;
using DMToolkit.Shared.Models.Dtos.Collections;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;

namespace DMToolkit.Services;

public class StartupDataService : IStartupDataService
{
    private readonly DMDbContext _context;
    private readonly IMemoryCache _cache;
    private readonly ILogger<StartupDataService> _logger;

    public StartupDataService(DMDbContext context, IMemoryCache cache, ILogger<StartupDataService> logger)
    {
        _context = context;
        _cache = cache;
        _logger = logger;
    }

    public async Task<StartupDataDto> GetStartupDataDtoAsync()
    {
        if (_cache.TryGetValue(CacheKeys.StartupData, out StartupData? cachedData) && cachedData != null)
        {
            _logger.LogInformation("Loaded startup data from cache.");
            return DtoConverters.ConvertStartupData(cachedData);
        }

        _logger.LogInformation("Cache miss. Fetching startup data from database...");

        var abilityScoresTask = _context.AbilityScoreDefinitions
                                        .Include(a => a.SkillDefinitions)
                                        .AsNoTracking().ToListAsync();
        var backgroundsTask = _context.BackgroundDefinitions
                                        .Include(b => b.AbilityScoreDefinitions)
                                        .Include(b => b.SkillDefinitions)
                                        .AsNoTracking().ToListAsync();
        var characterClassesTask = _context.CharacterClassDefinitions
                                        .Include(c => c.SubclassDefinitions)
                                            .ThenInclude(s => s.SubclassDefinitionFeatDefinitions)
                                        .Include(c => c.CharacterClassDefinitionFeatDefinitions)
                                        .AsNoTracking().ToListAsync();
        var featsTask = _context.FeatDefinitions
                                .Include(f => f.FeatDefinitionFeatEffects)
                                .AsNoTracking().ToListAsync();
        var speciesTask = _context.SpeciesDefinitions.AsNoTracking().ToListAsync();
        var featEffectsTask = _context.FeatEffects.AsNoTracking().ToListAsync();
        var schoolsTask = _context.Schools.AsNoTracking().ToListAsync();
        var spellsTask = _context.Spells.AsNoTracking().ToListAsync();
        var spellEffectsTask = _context.SpellEffects.AsNoTracking().ToListAsync();

        await Task.WhenAll(abilityScoresTask, backgroundsTask, characterClassesTask, featsTask, speciesTask, featEffectsTask, schoolsTask, spellsTask, spellEffectsTask);

        var startupData = new StartupData
        {
            AbilityScoreDefinitions = abilityScoresTask.Result,
            BackgroundDefinitions = backgroundsTask.Result,
            CharacterClassDefinitions = characterClassesTask.Result,
            Feats = featsTask.Result,
            Species = speciesTask.Result,
            FeatEffects = featEffectsTask.Result,
            Schools = schoolsTask.Result,
            Spells = spellsTask.Result,
            SpellEffects = spellEffectsTask.Result
        };

        return DtoConverters.ConvertStartupData(startupData);
    }
}