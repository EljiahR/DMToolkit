public class DiceTest 
{
    [Fact]
    public void RollingDice_ShouldReturnValueWithinRange()
    {
        // Arrange
        Dice dice = new(4,2); // 2d4 (simulating 2 4-sided dice)

        // Act
        var result = dice.Roll();

        // Assert
        Assert.InRange(result, 2, 8); // Minimum of 2, maximum of 8
    }
}