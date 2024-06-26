using module ../src/SomeClass.psm1;

Set-StrictMode -Version Latest;
$ErrorActionPreference = "Stop";

Describe 'Foo tests: ' {
    It 'Should return "foo".' {
        $inst = [SomeClass]::new();
        $inst.GetFoo() | Should -Be "Foo";
    }
}
