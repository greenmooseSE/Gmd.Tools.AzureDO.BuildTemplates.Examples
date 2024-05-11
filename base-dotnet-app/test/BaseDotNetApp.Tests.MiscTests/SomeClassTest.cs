using FluentAssertions;
using Gmd.CsCommon.UnitTest;
using NUnit.Framework;

namespace BaseDotNetApp.Tests.MiscTests;

[TestFixture]
internal class SomeClassTest : GmdUnitTest<GmdTestContext>
{
    #region Public members

    [Test]
    public void FooReturnsBar()
    {
        new SomeClass().Foo().Should().Be("Bar");
    }

    #endregion
}
