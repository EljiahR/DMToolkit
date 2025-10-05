using DMToolkit.Data.Seeders.SeedData;

namespace DMToolkit.Data.Seeders;

public class TestDataSeeder
{
    private readonly DMDbContext _context;
    public TestDataSeeder(DMDbContext context)
    {
        _context = context;
    }

    public void Seed()
    {
        _context.AddRange(SkillDefinitionSeedData.AllSkillDefinitions);
        _context.AddRange(FeatEffectSeedData.AllEffects);
        _context.AddRange(FeatDefinitionSeedData.AllFeatDefinitions);
        _context.SaveChanges();

        _context.AddRange(FeatDefinitionFeatEffectSeedData.AllTables);
        _context.AddRange(AbilityScoreDefinitionSeedData.AllScoreDefinitions);
        _context.AddRange(CharacterClassDefinitionSeedData.AllCharacterClasses);
        _context.AddRange(SpeciesDefinitionSeedData.AllSpecies);
        _context.SaveChanges();

        _context.AddRange(BackgroundDefinitionSeedData.AllBackgroundDefinitions);
        _context.AddRange(LineageDefinitionSeedData.AllLineages);
        _context.SaveChanges();
    }
}