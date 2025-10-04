using DMToolkit.Data.Seeders.SeedData;
using DMToolkit.Models.Definitions;
using DMToolkit.Models.Entities;
using DMToolkit.Models.JoinTables;

namespace DMToolkit.Data.Seeders;

public static class TestDataSeeder
{
    public static async Task SeedAsync(DMDbContext context)
    {
        context.AddRange(SkillDefinitionSeedData.AllSkillDefinitions);
        context.AddRange(FeatEffectSeedData.AllEffects);
        context.AddRange(FeatDefinitionSeedData.AllFeatDefinitions);
        await context.SaveChangesAsync();


        context.AddRange(FeatDefinitionFeatEffectSeedData.AllTables);
        context.AddRange(AbilityScoreDefinitionSeedData.AllScoreDefinitions);
        await context.SaveChangesAsync();

        context.AddRange(BackgroundDefinitionSeedData.AllBackgroundDefinitions);
        await context.SaveChangesAsync();
    }
}