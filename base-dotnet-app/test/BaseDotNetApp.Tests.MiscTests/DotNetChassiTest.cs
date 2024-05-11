namespace BaseDotNetApp.Tests.MiscTests;

using FluentAssertions;
using Gmd.CsCommon.UnitTest;
using NUnit.Framework;
[TestFixture]
internal class DotNetChassiTest : CommonChassiDotNetTest
{
    #region Public members

    /// <inheritdoc />
    [Test]
    public override void PropertiesInDirectoryBuildPropsAreNotOverriddenInProjectFile()
    {
        pPropertiesInDirectoryBuildPropsAreNotOverriddenInProjectFile().Should().BeTrue();
    }

    #endregion
}
