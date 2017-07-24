var Chapter = require('../src/Chapter')

var path = require('path')

decribe ('Book', function(){
   var chapters = [] 
   var book  
}) 

beforeEach(function() {
    for(bookIndex = 0; bookIndex<12; bookIndex++) {
      chapters.push(new Chapter(path.join(__dirname, '/fixtures/samplechapter.txt')))
    }
    var book = new Book (chapters)

})

test ('hasChapters', function(){
expect(book.getChapters()).toBe(chapters)
})

