var Chapter = require('../src/Chapter')


function Book(chapters){
    this._chapters = chapters

}

Book.prototype = {
    getChapters: function(){
        
    return this._chapters
    }
}

module.exports = Book
