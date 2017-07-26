var Chapter = require('../src/Chapter')
var Book = require('../src/Book')
var path = require('path')


describe('Book', function(){
  var chapters = []
  var book

  beforeEach(function(){
      for(bookIndex = 0; bookIndex<12; bookIndex++) {
        chapters.push(new Chapter(path.join(__dirname, '/fixtures/samplechapter.txt')))
        
      }
      book = new Book(chapters)
  })

  test('has chapters', function(){

    expect(book.getChapters()).toBe(chapters)
  })

})