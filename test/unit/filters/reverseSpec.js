describe('reverse', function() {
    beforeEach(module('myApp.filters'));

    it('should return the reversed string', inject(function(reverseFilter) {
        expect(reverseFilter('abc')).toEqual('cba');
        expect(reverseFilter('ABC')).toEqual('CBA');
        expect(reverseFilter('Im just a poor boy, I need no sympathy')).toEqual('yhtapmys on deen I ,yob roop a tsuj mI');
    }));
});