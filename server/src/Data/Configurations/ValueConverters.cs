using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SharedModels.Enums;

namespace DMToolkit.API.Data.Configurations;

public static class ValueConverters
{
    public static readonly ValueConverter<List<int>, string> IntListConverter = new(
        v => string.Join(",", v),
        v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
            .Select(s => int.Parse(s))
            .ToList()
    );

    public static readonly ValueConverter<List<WeaponCategory>, string> WeaponCategoryListConverter = new(
        v => string.Join(",", v.Select(e => e.ToString())),
        v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
            .Select(s => (WeaponCategory)Enum.Parse(typeof(WeaponCategory), s))
            .ToList()
    );

    public static readonly ValueConverter<List<ArmorCategory>, string> ArmorCategoryListConverter = new(
        v => string.Join(",", v.Select(e => e.ToString())),
        v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
            .Select(s => (ArmorCategory)Enum.Parse(typeof(ArmorCategory), s))
            .ToList()
    );

    public static readonly ValueConverter<List<ToolCategory>, string> ToolCategoryListConverter = new(
        v => string.Join(",", v.Select(e => e.ToString())),
        v => v.Split(",", StringSplitOptions.RemoveEmptyEntries)
            .Select(s => (ToolCategory)Enum.Parse(typeof(ToolCategory), s))
            .ToList()
    );
}