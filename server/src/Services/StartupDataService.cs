using DMToolkit.API.Data;
using DMToolkit.API.Helpers;
using DMToolkit.API.Models.DMToolkitModels.Collections;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using SharedModels.Models.Dtos.Collections;

namespace DMToolkit.API.Services;

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
                                        .Include(b => b.BackgroundDefinitionItemDefinitionBases)
                                        .AsNoTracking().ToListAsync();
        var characterClassesTask = _context.CharacterClassDefinitions
                                        .Include(c => c.SubclassDefinitions)
                                            .ThenInclude(s => s.SubclassDefinitionFeatDefinitions)
                                        .Include(c => c.CharacterClassDefinitionFeatDefinitions)
                                        .Include(c => c.StartingEquipmentQuantityTables)
                                        .Include(c => c.PrimaryAbilityScoreDefinition)
                                        .Include(c => c.AlternativePrimaryAbilityScoreDefinition)
                                        .AsNoTracking().ToListAsync();
        var featsTask = _context.FeatDefinitions
                                .Include(f => f.FeatDefinitionEffects)
                                .AsNoTracking().ToListAsync();
        var itemsTask = _context.ItemDefinitionBases.AsNoTracking().ToListAsync();
        var speciesTask = _context.SpeciesDefinitions
                                    .Include(s => s.FeatDefinitions)
                                    .Include(s => s.LineageDefinitions)
                                        .ThenInclude(l => l.FeatDefinitions)
                                    .AsNoTracking().ToListAsync();
        var effectsTask = _context.Effects.AsNoTracking().ToListAsync();
        var schoolsTask = _context.Schools.AsNoTracking().ToListAsync();
        var spellsTask = _context.Spells
                                    .Include(s => s.School)
                                    .Include(s => s.CharacterClassDefinitions)
                                    .Include(s => s.SpellItems)
                                    .Include(s => s.Effects)
                                    .AsNoTracking().ToListAsync();

        await Task.WhenAll(abilityScoresTask, backgroundsTask, characterClassesTask, featsTask, itemsTask, speciesTask, effectsTask, schoolsTask, spellsTask);

        var startupData = new StartupData
        {
            AbilityScoreDefinitions = abilityScoresTask.Result,
            BackgroundDefinitions = backgroundsTask.Result,
            CharacterClassDefinitions = characterClassesTask.Result,
            FeatDefinitions = featsTask.Result,
            ItemDefinitionBases = itemsTask.Result,
            SpeciesDefinitions = speciesTask.Result,
            Effects = effectsTask.Result,
            Schools = schoolsTask.Result,
            Spells = spellsTask.Result
        };

        return DtoConverters.ConvertStartupData(startupData);
    }
}