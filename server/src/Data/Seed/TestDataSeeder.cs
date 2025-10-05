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
        
        if (!_context.SkillDefinitions.Any()) _context.AddRange(SkillDefinitionSeedData.AllSkillDefinitions);
        if (!_context.FeatEffects.Any()) _context.AddRange(FeatEffectSeedData.AllEffects);
        if (!_context.FeatDefinitions.Any()) _context.AddRange(FeatDefinitionSeedData.AllFeatDefinitions);
        _context.SaveChanges();

        if (!_context.FeatDefinitionFeatEffects.Any()) _context.AddRange(FeatDefinitionFeatEffectSeedData.AllTables);
        if (!_context.AbilityScoreDefinitions.Any()) _context.AddRange(AbilityScoreDefinitionSeedData.AllScoreDefinitions);
        if (!_context.CharacterClassDefinitions.Any())_context.AddRange(CharacterClassDefinitionSeedData.AllCharacterClasses);
        if (!_context.SpeciesDefinitions.Any())_context.AddRange(SpeciesDefinitionSeedData.AllSpecies);
        _context.SaveChanges();

        if (!_context.BackgroundDefinitions.Any())_context.AddRange(BackgroundDefinitionSeedData.AllBackgroundDefinitions);
        if (!_context.LineageDefinitions.Any())_context.AddRange(LineageDefinitionSeedData.AllLineages);
        _context.SaveChanges();
    }
}