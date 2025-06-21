namespace DMToolkit.Tests;

public class UnitTest1
{
    [Fact]
    public void Test1()
    {
        // Arrange
        int i = 0;
        // Act
        i += 1;
        // Assert
        Assert.Equal(1, i);
    }
}