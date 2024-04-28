import {Dummy} from "../src/Dummy";

describe('Dummy tests', () => {
    it('should not throw when invoking dummyMethod', () => {
        const inst = new Dummy();
        inst.dummyMethod();
    });
});
