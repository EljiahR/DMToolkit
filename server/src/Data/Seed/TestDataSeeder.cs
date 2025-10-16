using DMToolkit.Data.Seeders.SeedData;

namespace DMToolkit.Data.Seeders;

public class TestDataSeeder
{
    private readonly DMDbContext _context;
    private readonly ILogger<TestDataSeeder> _logger;
    public TestDataSeeder(DMDbContext context, ILogger<TestDataSeeder> logger)
    {
        _context = context;
        _logger = logger;
    }

    public void Seed()
    {
        bool saveFlag = false;
        using (var contextTransaction = _context.Database.BeginTransaction())
        {
            try
            {
                if (!_context.Effects.Any())
                {
                    saveFlag = true;
                    _logger.LogInformation("Adding feat effects...");
                    _context.AddRange(EffectSeedData.AllEffects);
                }

                if (!_context.FeatDefinitions.Any())
                {
                    saveFlag = true;
                    _logger.LogInformation("Adding feat definitions...");
                    _context.AddRange(FeatDefinitionSeedData.AllFeatDefinitions);
                }

                if (saveFlag)
                {
                    saveFlag = false;
                    _logger.LogInformation("Saving changes...");
                    _context.SaveChanges();
                }

                if (!_context.FeatDefinitionFeatEffects.Any())
                {
                    saveFlag = true;
                    _logger.LogInformation("Adding feat definition to feat effect join tables...");
                    _context.AddRange(FeatDefinitionEffectSeedData.AllTables);
                }
                
                if (!_context.AbilityScoreDefinitions.Any())
                {
                    saveFlag = true;
                    _logger.LogInformation("Adding ability score definitions...");
                    _context.AddRange(AbilityScoreDefinitionSeedData.AllScoreDefinitions);
                }

                if (!_context.SkillDefinitions.Any())
                {
                    saveFlag = true;
                    _logger.LogInformation("Adding skill definitions...");
                    _context.AddRange(SkillDefinitionSeedData.AllSkillDefinitions);
                }

                if (!_context.CharacterClassDefinitions.Any())
                {
                    saveFlag = true;
                    _logger.LogInformation("Adding character class definitions...");
                    _context.AddRange(CharacterClassDefinitionSeedData.AllCharacterClasses);
                }

                if (!_context.SpeciesDefinitions.Any())
                {
                    saveFlag = true;
                    _logger.LogInformation("Adding species definitions...");
                    _context.AddRange(SpeciesDefinitionSeedData.AllSpecies);
                }
                
                if (saveFlag)
                {
                    saveFlag = false;
                    _logger.LogInformation("Saving changes...");
                    _context.SaveChanges();
                }

                if (!_context.BackgroundDefinitions.Any())
                {
                    saveFlag = true;
                    _logger.LogInformation("Adding background definitions...");
                    _context.AddRange(BackgroundDefinitionSeedData.AllBackgroundDefinitions);
                }

                if (!_context.LineageDefinitions.Any())
                {
                    saveFlag = true;
                    _logger.LogInformation("Adding lineage definitions...");
                    _context.AddRange(LineageDefinitionSeedData.AllLineages);
                }

                if (!_context.CharacterClassDefinitionFeatDefinitions.Any())
                {
                    saveFlag = true;
                    _logger.LogInformation("Adding character class to feat definitions join tables...");
                    _context.AddRange(CharacterClassDefinitionFeatDefinitionSeedData.AllClassFeatDefinitionTables);
                }
                
                if (saveFlag)
                {
                    _logger.LogInformation("Saving changes...");
                    _context.SaveChanges();
                }

                _logger.LogInformation("Committing changes to database...");
                contextTransaction.Commit();
                _logger.LogInformation("Changes successfully committed database...");
            } catch(Exception ex)
            {
                _logger.LogError("Error occured during seed process. Error: {}", ex.Message);
            }
        }
    }
}