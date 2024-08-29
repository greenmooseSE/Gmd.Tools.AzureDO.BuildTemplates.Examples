class SomeClass {
    SomeClass() {
        #Default ctor required due to bug in Pester - https://github.com/pester/Pester/issues/2306
        #Error received otherwise: ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than or equal to the size of the collection. (Parameter 'index')
    }
    [string]GetFoo() {
        return "Foo";
    }
}
