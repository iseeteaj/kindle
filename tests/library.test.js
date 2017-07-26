var Library = require('../src/Library')



describe('Library', function(){
    var library

})


beforeEach (function(){
    library = new Library()
})


test('has no books when instantiated', function(){
    expect(library.getBooks()).toHaveLength(0)
})
