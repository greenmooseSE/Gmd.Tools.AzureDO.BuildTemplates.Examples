using FluentAssertions;
using Gmd.CsCommon.Extensions.StringExtension;
using Gmd.CsCommon.UnitTest;
using Microsoft.Extensions.Logging;
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

    [TestCase(10)]
    [TestCase(10000, Category = "LongRunningTest")]
    public void SomeLongRunningTest(int sleep)
    {
        pLog.LogDebug("Sleeping for {0:N0} ms.".zFormatWith(sleep));
        Thread.Sleep(sleep);
    }

    #endregion
}
