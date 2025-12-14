using Microsoft.EntityFrameworkCore.ChangeTracking;
using SharedModels.Enums;

namespace DMToolkit.API.Data.Configurations;

public static class ValueComparers
{
    public static ValueComparer<List<int>> IntListComparer = new(
        (c1, c2) => c1 != null && c2 != null ? c1.SequenceEqual(c2) : false,
        c => c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
        c => c.ToList()
    );

    public static ValueComparer<List<WeaponCategory>> WeaponCategoryListComparer = new(
        (c1, c2) => c1 != null && c2 != null ? c1.SequenceEqual(c2) : false,
        c => c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
        c => c.ToList()
    );

    public static ValueComparer<List<ArmorCategory>> ArmorCategoryListComparer = new(
        (c1, c2) => c1 != null && c2 != null ? c1.SequenceEqual(c2) : false,
        c => c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
        c => c.ToList()
    );

    public static ValueComparer<List<ToolCategory>> ToolCategoryListComparer = new(
        (c1, c2) => c1 != null && c2 != null ? c1.SequenceEqual(c2) : false,
        c => c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
        c => c.ToList()
    );
    
}