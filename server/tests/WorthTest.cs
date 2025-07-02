using DMToolkit.Models.Currency;
namespace DMToolkit.Tests;

public class WorthTest
{
    [Fact]
    public void AddingTwoWorthObjects_ShouldCombineCorrectly()
    {
        // Arrange
        Worth initial = new(0, 0, 0, 50); // 50 gold
        Worth additional = new(0, 0, 0, 50); // 50 gold

        // Act
        initial.Add(additional);

        // Assert
        Assert.Equal("You have exactly 100gp", initial.TotalInGold());
    }

    [Fact]
    public void SubtractingTwoWorthObjects_ShouldSubtractCorrectly()
    {
        // Arrange
        Worth initial = new(0, 0, 0, 50); // 50 gold
        Worth subtraction = new(0, 0, 0, 10); // 10 gold

        // Act
        initial.Subtract(subtraction);

        //Assert
        Assert.Equal("You have exactly 40gp", initial.TotalInGold());
    }

    [Fact]
    public void SubtractingTwoWorthObjectsOfEqualValue_ShouldSubtractCorrectly()
    {
        // Arrange
        Worth initial = new(0, 0, 0, 50); // 50 gold
        Worth subtraction = new(0, 0, 0, 50); // 10 gold

        // Act
        initial.Subtract(subtraction);

        //Assert
        Assert.Equal("You have exactly 0gp", initial.TotalInGold());
    }

    [Fact]
    public void SubtractingTwoWorthObjects_SubractionShouldFail()
    {
        // Arrange
        Worth initial = new(0, 0, 0, 50); // 50 gold
        Worth subtraction = new(0, 0, 0, 100); // 10 gold

        // Act
        initial.Subtract(subtraction);

        //Assert
        Assert.Equal("You have exactly 50gp", initial.TotalInGold());
    }

    [Fact]
    public void SubtractingTwoWorthObjectsOfDifferentDenominations_ShouldSubtractCorrectly()
    {
        // Arrange
        Worth initial = new(0, 0, 0, 50); // 50 gold
        Worth subtraction = new(100, 0, 10, 10); // 10 gold

        // Act
        initial.Subtract(subtraction);

        //Assert
        Assert.Equal("You have exactly 34gp", initial.TotalInGold());
    }
}