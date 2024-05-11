using FluentAssertions;
using Gmd.CsCommon.UnitTest;
using NUnit.Framework;

namespace BaseDotNetApp2.Tests.MiscTests;

[TestFixture]
internal class SomeClass2Test : GmdUnitTest<GmdTestContext>
{
    #region Public members

    [Test]
    public void FooReturnsBar()
    {
        new SomeClass2().Foo().Should().Be("Bar");
    }

    #endregion
}
